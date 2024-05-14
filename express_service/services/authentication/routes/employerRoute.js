const express = require('express');
const router = express.Router();
const keycloak = require('../services/keycloak.js');

const { KC_CLIENT_ID } = require('../configuration/keycloak.js');
const ROLE = 'employer';

router.get('/', keycloak.protect(`${KC_CLIENT_ID}:${ROLE}`), (req, res, next) => {
  return next();
});

// Employer login
router.post('/login', (req, res, next) => {
  // redirect to keycloak login page
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }
});

// Employer logout
router.post('/logout', (req, res, next) => {
  // redirect to keycloak logout page
});

module.exports = router;
