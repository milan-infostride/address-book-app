const express = require('express');
const Router = express.Router();

const userController = require('../controllers/userController')

// user api's

Router.post('/sign-up-user',userController.signUpUser)
Router.post('/login-user',userController.loginUser)


module.exports = Router;