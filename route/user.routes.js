const router = require('express').Router();
const authController = require("../controllers/auth.controller");


// AUTHENTIFICATION

router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);


module.exports = router;