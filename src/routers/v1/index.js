const express = require('express');
const v1 = express.Router();
const userController = require('../../controllers/user.controller');
const resController = require('../../controllers/restaurant.controller');
//user
v1.get('/users',userController.getUser());
v1.post('/users',userController.createUser());
v1.post('/users/like',userController.getLikesbyUser());// get like by user
v1.post('/users/rate',userController.getRatesbyUser())// get rate by user
//restaurant 
v1.post('/res/:resId/like',resController.likeRes()); // like - unlike
v1.get('/res/:resId/like',resController.getLike()); //get like by restaurant
v1.post('/res/:resId/rate',resController.rateRes()); // rate rés
v1.get('/res/:resId/rate',resController.getRate()); // get rate by restaurant
//order
v1.post('/users/order',userController.orderFood());
//-------------------------------------------//
module.exports = v1;