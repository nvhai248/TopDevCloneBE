const { KC_CLIENT_ID, KC_CLIENT_SECRET, KC_REALM, KC_SERVER_URL } = require('../configuration/keycloak.js');

const otherController = {
  refreshToken: async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).send('Refresh token is required');
    }
    const response = await fetch(`${KC_SERVER_URL}/realms/${KC_REALM}/protocol/openid-connect/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: KC_CLIENT_ID,
        client_secret: KC_CLIENT_SECRET,
        refresh_token: refreshToken,
      }),
    });

    const responseData = await response.json();

    if (responseData && responseData.access_token && responseData.refresh_token) {
      const { access_token, refresh_token } = responseData;
      return res.status(200).send({ access_token, refresh_token });
    }
    return res.status(400).send('Error refreshing token');
  },
};

module.exports = otherController;
