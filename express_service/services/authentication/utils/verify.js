const { PORT } = require('../configuration/app');
const jwt = require('jsonwebtoken');

const verifyToken = async (token, role) => {
  try {
    const response = await fetch(`http://localhost:${PORT}/${role}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = jwt.decode(token);

    return {
      status: response.status === 200,
      userId: data?.sub,
    };
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return false;
  }
};

module.exports = verifyToken;
