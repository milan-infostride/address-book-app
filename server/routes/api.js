const express = require('express');
const Router = express.Router();

const userController = require('../controllers/userController')

// user api's

Router.post('/api/signUpUser',userController.signUpUser)



module.exports = {
    apiRoutes : Router
}