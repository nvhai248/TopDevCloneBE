const express = require('express');
const router = express.Router();
const keycloak = require('../services/keycloak.js');

const adminController = require('../controllers/adminController.js');

const { KC_CLIENT_ID } = require('../configuration/keycloak.js');
const ROLE = 'admin';

// [GET] /auth/admin
router.get('/', keycloak.protect(`${KC_CLIENT_ID}:${ROLE}`), adminController.auth);
// [POST] /auth/admin/login
router.post('/login', adminController.login);
// [GET] /auth/admin/login
router.get('/login', adminController.loginWithCredentials);
// [POST] /auth/admin/logout
router.post('/logout', keycloak.protect(`${KC_CLIENT_ID}:${ROLE}`), adminController.logout);

module.exports = router;
