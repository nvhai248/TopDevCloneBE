const { KC_CLIENT_ID, KC_CLIENT_SECRET, KC_REALM, KC_SERVER_URL } = require('../configuration/keycloak.js');
const { STATUS_CODES } = require('../utils/app-errors');
const { SetResponse } = require('../utils/success-response');
const { ErrorResponse } = require('../utils/error-handler');

const adminController = {
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

      if (!response.ok) {
        const { errorMessage } = await response.json();
        ErrorResponse(new Error(errorMessage), response);
      }

      const data = await response.json();
      const { access_token, refresh_token, expires_in, refresh_expires_in } = data;
      const responseData = {
        access_token,
        refresh_token,
        expires_in,
        refresh_expires_in,
      };

      // res.cookie('access_token', access_token, { httpOnly: true });
      // res.cookie('refresh_token', refresh_token, { httpOnly: true });

      SetResponse(res, STATUS_CODES.OK, responseData, 'OK', null);
    } catch (error) {
      ErrorResponse(error, res);
    }
  },
  loginWithCredentials: async (req, res, next) => {
    try {
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
        ErrorResponse(new Error(errorMessage), response);
      }

      const data = await response.json();
      const { access_token, refresh_token, expires_in, refresh_expires_in } = data;
      const responseData = {
        access_token,
        refresh_token,
        expires_in,
        refresh_expires_in,
      };

      // res.cookie('access_token', access_token, { httpOnly: true });
      // res.cookie('refresh_token', refresh_token, { httpOnly: true });

      SetResponse(res, STATUS_CODES.OK, responseData, 'OK', null);
    } catch (error) {
      ErrorResponse(error, res);
    }
  },
  logout: (req, res, next) => {
    // res.clearCookie('access_token');
    // res.clearCookie('refresh_token');
    // return res.status(200).send('Logout successful');
    SetResponse(res, STATUS_CODES.OK, job, 'OK', null);
  },
};

module.exports = adminController;
