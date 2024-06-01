const {
  KC_CLIENT_ID,
  KC_CLIENT_SECRET,
  KC_SERVER_URL,
  KC_REALM,
  KC_CANDIDATE_ROLE_ID,
  KC_CANDIDATE_ROLE,
} = require('../configuration/keycloak');
const { STATUS_CODES } = require('../utils/app-errors');
const { ErrorResponse } = require('../utils/error-handler');
const getCredentials = require('../utils/get-credentials');
const getUser = require('../utils/get-user');
const setRole = require('../utils/set-role');
const { SetResponse } = require('../utils/success-response');

const keycloakCreateUserAndLogin = async (data) => {
  const { email, given_name, family_name } = data;
  if (!email || !given_name || !family_name) {
    return {
      error: {
        message: 'All fields are required: email, first name, last name',
      },
    };
  }

  const credentials = await getCredentials();

  // 1. check existed user in keycloak
  let createdUser = await getUser(email, credentials);

  if (!createdUser) {
    // 2.1 user is not existed in keycloak, create a new one, assign to createdUser
    // 2.1.0 create account in keycloak
    const responseRegister = await fetch(`${KC_SERVER_URL}/admin/realms/${KC_REALM}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${credentials.access_token}`,
      },
      body: JSON.stringify({
        username: email,
        email,
        firstName: given_name,
        lastName: family_name,
        enabled: true,
        emailVerified: false,
        credentials: [
          {
            type: 'password',
            value: process.env.KEYCLOAK_DEFAULT_USER_PASSWORD,
            temporary: false,
          },
        ],
      }),
    });
    if (!responseRegister.ok) {
      const { errorMessage } = await responseRegister.json();
      return {
        error: {
          message: errorMessage,
        },
      };
    }

    // 2.1.1 Set role
    const responseRole = await setRole(email, KC_CANDIDATE_ROLE_ID, KC_CANDIDATE_ROLE, credentials);
    if (!responseRole) {
      return {
        error: {
          message: `Failed to set role for user ${email}`,
        },
      };
    }

    // 2.1.2 Get user info, assign to createdUser
    createdUser = await getUser(email, credentials);
  }

  // 2.2 user is existed, continue to login
  if (!createdUser) {
    return {
      error: {
        message: 'Failed to get user info',
      },
    };
  }

  const response = await fetch(`${KC_SERVER_URL}/realms/${KC_REALM}/protocol/openid-connect/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'password',
      username: email,
      password: process.env.KEYCLOAK_DEFAULT_USER_PASSWORD,
      client_id: KC_CLIENT_ID,
      client_secret: KC_CLIENT_SECRET,
    }),
  });

  if (response.status === 401) {
    return {
      error: {
        message: 'Invalid username or password',
      },
    };
  } else if (!response.ok) {
    const { errorMessage } = await response.json();
    return {
      error: {
        message: errorMessage,
      },
    };
  }

  // 2.3 extracted data, return to front end
  const { access_token, refresh_token, expires_in, refresh_expires_in } = await response.json();
  const { id, firstName, lastName } = createdUser;
  const responseData = {
    id,
    username: email,
    firstName,
    lastName,
    email,
    access_token,
    refresh_token,
    expires_in,
    refresh_expires_in,
  };
  return responseData;
};

const googleLoginHandler = async (token = '', res) => {
  try {
    const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    const data = await response.json();

    if (data.error) {
      return ErrorResponse(new Error(data.error?.message || 'Can not login with google, try again'), res);
    }

    // create account in keycloak
    const responseKeycloak = await keycloakCreateUserAndLogin(data);

    if (responseKeycloak.error) {
      return ErrorResponse(new Error(responseKeycloak.error.message), res);
    }

    return SetResponse(res, STATUS_CODES.OK, responseKeycloak, 'OK', null);
  } catch (error) {
    return ErrorResponse(new Error('Can not get gooogle user data'), res);
  }
};

const candidateController = {
  login: async (req, res) => {
    console.log('login start processing');
    // handle case for google login
    const { type, token } = req.body;

    if (type === 'google') {
      if (!token) {
        return ErrorResponse(new Error('Token is required'), res);
      }
      return googleLoginHandler(token, res);
    }

    return ErrorResponse(new Error('Invalid type login'), res);
  },
};

module.exports = candidateController;
