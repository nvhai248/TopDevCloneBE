const { KC_CLIENT_ID, KC_CLIENT_SECRET, KC_REALM, KC_SERVER_URL } = require('../configuration/keycloak.js');
const { STATUS_CODES } = require('../utils/app-errors');
const { SetResponse } = require('../utils/success-response');
const { ErrorResponse } = require('../utils/error-handler');

const employerController = {
  auth: (req, res, next) => {
    return next();
  },
  login: async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return ErrorResponse(new Error('Username and password are required'), res);
    }

    try {
      const response = await fetch(`${KC_SERVER_URL}/realms/${KC_REALM}/protocol/openid-connect/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'password',
          username: username,
          password: password,
          client_id: KC_CLIENT_ID,
          client_secret: KC_CLIENT_SECRET,
        }),
      });

      if (response.status === 401) {
        return ErrorResponse(new Error('Invalid username or password'), res);
      } else if (!response.ok) {
        const { errorMessage } = await response.json();
        return ErrorResponse(new Error(errorMessage), res);
      }

      const data = await response.json();
      const { access_token, refresh_token, expires_in, refresh_expires_in } = data;
      const responseData = {
        access_token,
        refresh_token,
        expires_in,
        refresh_expires_in,
      };

      return SetResponse(res, STATUS_CODES.OK, responseData, 'OK', null);
    } catch (error) {
      return ErrorResponse(error, res);
    }
  },
  register: async (req, res, next) => {
    const { username, password, email, firstName, lastName } = req.body;

    if (!username || !password || !email || !firstName || !lastName) {
      return ErrorResponse(new Error('Username, password, email, first name and last name are required'), res);
    }

    try {
      // login with client credentials to get access token
      const response = await fetch(`${KC_SERVER_URL}/realms/${KC_REALM}/protocol/openid-connect/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: KC_CLIENT_ID,
          client_secret: KC_CLIENT_SECRET,
        }),
      });

      if (!response.ok) {
        const { errorMessage } = await response.json();
        return ErrorResponse(new Error(errorMessage), res);
      }

      const data = await response.json();
      const { access_token } = data;

      const responseRegister = await fetch(`${KC_SERVER_URL}/admin/realms/${KC_REALM}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`, // req.kauth.grant.access_token
        },
        body: JSON.stringify({
          username,
          email,
          firstName,
          lastName,
          enabled: true,
          emailVerified: false,
          credentials: [
            {
              type: 'password',
              value: password,
              temporary: false,
            },
          ],
        }),
      });

      if (!responseRegister.ok) {
        const { errorMessage } = await responseRegister.json();
        return ErrorResponse(new Error(errorMessage), res);
      }

      return SetResponse(res, STATUS_CODES.OK, null, 'OK', null);
    } catch (error) {
      return ErrorResponse(error, res);
    }
  },
};

module.exports = employerController;
