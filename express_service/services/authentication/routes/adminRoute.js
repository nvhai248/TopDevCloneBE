const express = require('express');
const router = express.Router();
const keycloak = require('../services/keycloak.js');

const adminController = require('../controllers/adminController.js');

const { KC_CLIENT_ID, KC_ADMIN_ROLE } = require('../configuration/keycloak.js');

// [GET] /auth/admin
router.get('/', keycloak.protect(`${KC_CLIENT_ID}:${KC_ADMIN_ROLE}`), adminController.auth);
// [POST] /auth/admin/login
router.post('/login', adminController.login);
// [GET] /auth/admin/login
router.get('/login', adminController.loginWithCredentials);
// [POST] /auth/admin/logout
router.post('/logout', keycloak.protect(`${KC_CLIENT_ID}:${KC_ADMIN_ROLE}`), adminController.logout);

module.exports = router;
