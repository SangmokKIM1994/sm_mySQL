const express = require('express');
const router = express.Router();

const loginmiddleware = require('../middlewares/login.middleware')
const LoginController = require('../controllers/login.controller');
const loginController = new LoginController();


router.post('/',loginmiddleware,loginController.Login);

module.exports = router;