const { KC_CLIENT_ID, KC_CLIENT_SECRET, KC_REALM, KC_SERVER_URL } = require('../configuration/keycloak.js');
const { STATUS_CODES } = require('../utils/app-errors');
const { SetResponse } = require('../utils/success-response');
const { ErrorResponse } = require('../utils/error-handler');
const adminController = require('./adminController');

const employerController = {
  auth: (req, res, next) => {
    return next();
  },
  login: async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
      ErrorResponse(new Error('Username and password are required'), res);
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

      const data = await response.json();
      const { access_token, refresh_token, expires_in, refresh_expires_in } = data;
      const responseData = {
        access_token,
        refresh_token,
        expires_in,
        refresh_expires_in,
      };

      SetResponse(res, STATUS_CODES.OK, responseData, 'OK', null);
    } catch (error) {
      ErrorResponse(error, res);
    }
  },
  register: async (req, res, next) => {
    const { credentials, username, email, firstName, lastName } = req.body;

    if (!username || !credentials || !email || !firstName || !lastName) {
      ErrorResponse(new Error('Username, password, email, first name and last name are required'), res);
    }

    const { value } = credentials[0];
    console.log(req.body);

    try {
      // login with client credentials to get access token
      const responseLogin = await fetch(`${KC_SERVER_URL}/realms/${KC_REALM}/protocol/openid-connect/token`, {
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

      if (responseLogin.status === 401) {
        const { errorMessage } = await responseLogin.json();
        ErrorResponse(new Error(errorMessage), responseLogin);
      }

      const data = await responseLogin.json();
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
          credentials: [
            {
              type: 'password',
              value: value,
              temporary: false,
            },
          ],
        }),
      });

      if (responseRegister.status === 409) {
        const { errorMessage } = await responseRegister.json();
        ErrorResponse(new Error(errorMessage), res);
      }

      SetResponse(res, STATUS_CODES.OK, null, 'OK', null);
    } catch (error) {
      ErrorResponse(error, res);
    }
  },
};

module.exports = employerController;
