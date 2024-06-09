const express = require('express');
const router = express.Router();
const keycloak = require('../services/keycloak.js');

const { KC_CLIENT_ID } = require('../configuration/keycloak.js');
const candidateController = require('../controllers/candidateController.js');
const ROLE = 'user';

router.get('/', keycloak.protect(`${KC_CLIENT_ID}:${ROLE}`), (req, res, next) => {
  return next();
});

// User login
router.post('/login', candidateController.login);

// User logout
router.post('/logout', (req, res, next) => {
  // redirect to keycloak logout page
});

// User profile
router.get("/profile/:email", candidateController.getInfo);

// Update user profile
router.patch("/profile/:email", candidateController.updateInfo);

// upload cv
router.post("/upload-cv/:email", candidateController.uploadCV);

// soft delete cv
router.delete("/delete-cv/:id", candidateController.deleteCV);

module.exports = router;
