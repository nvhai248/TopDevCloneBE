const {
  KC_CLIENT_ID,
  KC_CLIENT_SECRET,
  KC_REALM,
  KC_SERVER_URL,
  KC_EMPLOYER_ROLE_ID,
  KC_EMPLOYER_ROLE,
} = require('../configuration/keycloak.js');
const { STATUS_CODES } = require('../utils/app-errors');
const { SetResponse } = require('../utils/success-response');
const { ErrorResponse } = require('../utils/error-handler');
const getCredentials = require('../utils/get-credentials');
const setRole = require('../utils/set-role');
const getRole = require('../utils/get-role');
const getUser = require('../utils/get-user');

const employerController = {
  auth: (req, res, next) => {
    // return SetResponse(res, STATUS_CODES.OK, 'Employer authenticated', 'OK', null);
    res.status(200).send('Employer authorized');
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
          username,
          password,
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

      // Get credentials
      const credentials = await getCredentials();

      if (!credentials) {
        return ErrorResponse(new Error('Error getting credentials'), res);
      }

      // Check role
      const { access_token, refresh_token, expires_in, refresh_expires_in } = await response.json();
      const roles = await getRole(username, credentials);

      if (!roles || !roles.includes(KC_EMPLOYER_ROLE)) {
        return ErrorResponse(new Error('Unauthorized'), res);
      }

      // Get user info
      const user = await getUser(username, credentials);

      if (!user) {
        throw new Error('Failed to get user info');
      }

      const { firstName, lastName, email } = user;

      const responseData = {
        username,
        firstName,
        lastName,
        email,
        access_token,
        refresh_token,
        expires_in,
        refresh_expires_in,
      };

      return SetResponse(res, STATUS_CODES.OK, responseData, 'OK', null);
    } catch (error) {
      console.error('Error during login:', error);
      return ErrorResponse(error, res);
    }
  },

  register: async (req, res, next) => {
    const { username, password, email, firstName, lastName } = req.body;

    if (!username || !password || !email || !firstName || !lastName) {
      return ErrorResponse(new Error('Username, password, email, first name and last name are required'), res);
    }

    try {
      // Get access token using client credentials
      const credentials = await getCredentials();

      if (!credentials) {
        return ErrorResponse(new Error('Error getting credentials'), res);
      }

      const responseRegister = await fetch(`${KC_SERVER_URL}/admin/realms/${KC_REALM}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${credentials.access_token}`,
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

      // Set role
      const responseRole = await setRole(username, KC_EMPLOYER_ROLE_ID, KC_EMPLOYER_ROLE, credentials);

      if (!responseRole) {
        return ErrorResponse(new Error('Failed to set role'), res);
      }

      return SetResponse(res, STATUS_CODES.OK, null, 'OK', null);
    } catch (error) {
      console.error('Error during registration:', error);
      return ErrorResponse(error, res);
    }
  },
};

module.exports = employerController;
