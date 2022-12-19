const userService = require('../services/user.service');
const { response } = require("../helpers/response");

const getUser = () =>{
    return async(req,res,next)=>{
        try {
            const user = await userService.getUsers();
            res.status(200).json(response(user));
        } catch (error) {
            next(error);
        }
    }
}

const createUser = () =>{
    return async (req,res,next)=>{
        try {
            const data = req.body;
            const createdUser = await userService.createUsers(data);
            res.status(200).json(response(createdUser));
        } catch (error) {
            next(error);
        }
    }
};

const getLikesbyUser = () =>{
    return async(req,res,next)=>{
        try {
            const {userId} = req.body;
            const likeList = await userService.getLikebyUser(userId);
            res.status(200).json(response(likeList));
        } catch (error) {
            next(error);
        }
    }
};
const getRatesbyUser = () =>{
    return async(req,res,next)=>{
        try {
            const {userId} = req.body;
            const rateList = await userService.getRatebyUser(userId);
            res.status(200).json(response(rateList));
        } catch (error) {
            next(error);
        }
    }
};
const orderFood = () =>{
    return async(req,res,next)=>{
        try {
            const data = req.body;
            const orderedFood = await userService.orderFoods(data);
            res.status(200).json(response(orderedFood));
        } catch (error) {
            res.status(500).json({error:error.message});
        };
    };
};
module.exports = {
    createUser,
    getUser,
    getLikesbyUser,
    getRatesbyUser,
    orderFood
};