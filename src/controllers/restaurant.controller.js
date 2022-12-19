const resService = require('../services/restaurant.service');
const { response } = require("../helpers/response");

const likeRes = () =>{
    return async(req,res,next)=>{
        try {
            const {resId} = req.params;
            const {userId} = req.body;
            const likeRes = await resService.likeUnlikeRes(userId,resId);
            res.status(200).json(response(likeRes));
        } catch (error) {
            next(error);
        };
    };
};

const getLike = () =>{
    return async(req,res,next)=>{
        try {
            const {resId} = req.params;
            const likeList = await resService.getLikebyRes(resId);
            res.status(200).json(response(likeList));
        } catch (error) {
            next(error);
        }
    }
};

const rateRes = () =>{
    return async(req,res,next) =>{
        try {
            const {resId} = req.params;
            const {userId,amount} = req.body;
            const rateRes = await resService.rateResServive(userId,resId,amount);
            res.status(200).json(response(rateRes));
        } catch (error) {
            // res.status(500).json({error:error.message});
            next(error);
        }
    }
};
const getRate = () =>{
    return async (req,res,next)=>{
        try {
            const {resId} = req.params;
            const listRate = await resService.getRatebyRes(resId);
            res.status(200).json(response(listRate));
        } catch (error) {
            next(error);
        }
    }
};
module.exports ={
    likeRes,
    getLike,
    rateRes,
    getRate
}