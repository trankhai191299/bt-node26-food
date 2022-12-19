const {Restaurant,User} = require('../models');

const {AppError} = require('../helpers/error');
// like-unlike
const likeUnlikeRes = async(userId,resId) =>{
    try {
        const res = await Restaurant.findByPk(resId);
        const user = await User.findByPk(userId);
        if(!res){
            throw new AppError(400,'Restaurant not found');
        };
        if(!user){
            throw new AppError(400,'User not found');
        };

        const hadLike = await res.hasUserLike(user.userId);
        if(hadLike){
            await res.removeUserLike(user.userId);
        }else{
            await res.addUserLike(user.userId);
        }

        return null;
    } catch (error) {
        throw error;
    }
};
// get like by res
const getLikebyRes = async (resId) =>{
    try {
        const res = await Restaurant.findByPk(resId);
        if(!res){
            throw new AppError(400,'Restaurant not found');
        };
        // console.log(res.__proto__);
        const likeList = await res.getUserLikes({
            through:{
                attributes:[],
            }
        });
        // console.log(likeList);
        return likeList;
    } catch (error) {
        throw error;
    }
};
//rate
const rateResServive = async(userId,resId,amount) =>{
    try {
        const res = await Restaurant.findByPk(resId);
        const user = await User.findByPk(userId);
        if(!res){
            throw new AppError(400,'Restaurant not found');
        };
        if(!user){
            throw new AppError(400,'User not found');
        };
        // console.log(res.__proto__);
        
        await res.addUserRate(userId,{through:{amount:amount}});
        // console.log(createdRate);
        return null;
    } catch (error) {
        throw error;
    }
};
//get rate by res
const getRatebyRes = async(resId) => {
    try {
        const res = await Restaurant.findByPk(resId);
        if(!res){
            throw new AppError(400,'Restaurant not found');
        };
        // console.log(res.__proto__);
        const rateList = await res.getUserRates();
        return rateList;
    } catch (error) {
        throw error;
    }
};





module.exports = {
    likeUnlikeRes,
    getLikebyRes,
    rateResServive,
    getRatebyRes,
};