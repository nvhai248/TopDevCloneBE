const isValidToken = require('../grpc/client.js'); // for grpc
const { UnauthorizeError } = require('../utils/app-errors.js');
// const checkAuth = require('../utils/auth.js'); // for rest
const { ErrorResponse } = require('../utils/error-handler');

const auth = (role) => {
  return async (req, res, next) => {
    try {
      let token = req.headers.authorization;

      if (!token) {
        throw new Error('Unauthorized');
      }

      token = token.split(' ')[1];

      const { valid } = await isValidToken(token, role); // for grpc
      // const valid = await checkAuth(token, role); // for rest

      if (!valid) {
        throw new UnauthorizeError('Invalid token');
      }

      next();
    } catch (error) {
      console.error(`Error in RequireRole middleware for role ${role}:`, error);
      ErrorResponse(error, res);
    }
  };
};

module.exports = auth;
