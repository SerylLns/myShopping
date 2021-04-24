const router = require('express').Router();
const authController = require("../controllers/auth.controller");
const usersController = require('../controllers/users.controller');

// USER
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUser);

// AUTHENTIFICATION
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

module.exports = router;