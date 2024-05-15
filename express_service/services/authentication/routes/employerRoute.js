const express = require('express');
const router = express.Router();
const keycloak = require('../services/keycloak.js');

const employerController = require('../controllers/employerController.js');

const { KC_CLIENT_ID } = require('../configuration/keycloak.js');
const ROLE = 'employer';

// [GET] /auth/employer
router.get('/', keycloak.protect(`${KC_CLIENT_ID}:${ROLE}`), employerController.auth);
// [POST] /auth/employer/login
router.post('/login', employerController.login);
// [POST] /auth/employer/register
router.post('/register', employerController.register);

module.exports = router;
