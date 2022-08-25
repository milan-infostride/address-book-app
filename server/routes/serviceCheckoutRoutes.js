const express = require('express');
const serviceController = require('../controllers/serviceController');
const userAuth = require('../middlewares/userAuth');
const Router =   express.Router();


Router.get('/checkout',(req,res,next)=>{
    res.render('checkout')
})
Router.get('/service-checkout-handler',userAuth,serviceController.serviceCheckoutHandler);
Router.get('/success-checkout-handler',serviceController.successCheckoutHandler);

module.exports = Router;