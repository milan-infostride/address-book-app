const express = require('express');
const Router = express.Router();
const userAuth = require('../middlewares/userAuth')
const userController = require('../controllers/userController')

// user api's

Router.post('/sign-up-user',userController.signUpUser)
Router.post('/login-user',userController.loginUser)
Router.get('/get-posts',userAuth,userController.getPosts);


module.exports = Router;