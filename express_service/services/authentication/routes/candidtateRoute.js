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
router.get("/profile/:id", candidateController.getInfo);

// Update user profile
router.patch("/profile/:id", candidateController.updateInfo);

//router.get("/:id/cvs", auth, candidateController.listCVbyUserId);
//router.get("/:id/main-cv", auth, candidateController.mainCV);
router.post("/upload-cv", candidateController.uploadCV);
//router.post("/create-cv", candidateController.createCV);
//router.delete("/delete-cv/:id", candidateController.deleteCV);

module.exports = router;
