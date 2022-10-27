const express = require('express');
const dummyController = require('../controllers/dummyController');
const Router = express.Router();

Router.get('/getDummyData',dummyController.sendDummyData)
Router.post('/addDummyData',dummyController.addDummyData);
Router.get('/getPaginatedDummyData',dummyController.getPaginatedDummyData)

module.exports = Router;