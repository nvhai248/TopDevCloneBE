const {
  KC_CLIENT_ID,
  KC_CLIENT_SECRET,
  KC_REALM,
  KC_SERVER_URL,
  KC_ADMIN_ROLE,
  KC_ADMIN_ROLE_ID,
  KC_CLIENT_UUID,
  KC_EMPLOYER_ROLE, // for registering admin (but not needed in this case)
} = require('../configuration/keycloak.js');
const { STATUS_CODES } = require('../utils/app-errors');
const { SetResponse } = require('../utils/success-response');
const { ErrorResponse } = require('../utils/error-handler');
const getCredentials = require('../utils/get-credentials');
const getRole = require('../utils/get-role');
const getUser = require('../utils/get-user');
const { getCompaniesStatus } = require('../grpc/client.js');

const adminController = {
  auth: (req, res, next) => {
    // return SetResponse(res, STATUS_CODES.OK, 'Admin authenticated', 'OK', null);
    res.status(200).send('Admin authorized');
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

      if (!response.ok) {
        const { errorMessage } = await response.json();
        throw new Error(errorMessage || 'Failed to authenticate');
      }

      // Get credentials
      const credentials = await getCredentials();

      if (!credentials) {
        return ErrorResponse(new Error('Error getting credentials'), res);
      }

      // Check role
      const { access_token, refresh_token, expires_in, refresh_expires_in } = await response.json();
      const roles = await getRole(username, credentials);

      if (!roles || !roles.includes(KC_ADMIN_ROLE)) {
        throw new Error('Unauthorized');
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

      // Uncomment if you want to set cookies
      // res.cookie('access_token', access_token, { httpOnly: true });
      // res.cookie('refresh_token', refresh_token, { httpOnly: true });

      return SetResponse(res, STATUS_CODES.OK, responseData, 'OK', null);
    } catch (error) {
      console.error('Error during login:', error);
      return ErrorResponse(error, res);
    }
  },
  loginWithCredentials: async (req, res, next) => {
    try {
      const credentials = await getCredentials();

      if (credentials) {
        return SetResponse(res, STATUS_CODES.OK, credentials, 'OK', null);
      } else {
        return ErrorResponse(new Error('Error getting credentials'), res);
      }
    } catch (error) {
      console.error('Error during loginWithCredentials:', error);
      return ErrorResponse(new Error('Error getting credentials'), res);
    }
  },
  getAccountsHR: async (req, res, next) => {
    const credentials = await getCredentials();

    if (!credentials) {
      return ErrorResponse(new Error('Error getting credentials'), res);
    }

    // call keycloak to get all employer account
    try {
      const response = await fetch(
        `${KC_SERVER_URL}/admin/realms/${KC_REALM}/clients/${KC_CLIENT_UUID}/roles/${KC_EMPLOYER_ROLE}/users`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${credentials.access_token}`,
          },
        },
      );

      if (!response.ok) {
        const { errorMessage } = await response.json();
        throw new Error(errorMessage || 'Failed to get hr accounts');
      }

      const data = await response.json();
      const hrIds = data.map((item) => item.id);

      const listInfo = await getCompaniesStatus({ hrIds });
      console.log('listInfo', listInfo);
    } catch (error) {
      console.error('Error during get hr accounts', error);
      return ErrorResponse(error, res);
    }

    return res.status(200).json({ data: ['getAccountsHE', '2'] });
  },
};

module.exports = adminController;
