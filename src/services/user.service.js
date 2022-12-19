const {User,Order,Restaurant,Food} = require('../models');
const { AppError } = require("../helpers/error");


const getUsers = async()=>{
    try {
        const user = User.findAll();
        return user;
    } catch (error) {
        throw error;
    }
};

const createUsers = async(data) =>{
    try {
        const user = await User.findOne({
            where:{
                email:data.email,
            },
        });
        if(user){
            throw new AppError(400,"Email is existed");
        };

        const createdUser = await User.create(data);
        return createdUser;
    } catch (error) {
        throw error;
    }
};
// get like by user
const getLikebyUser = async(userId) =>{
    try {
        const user = await User.findByPk(userId);
        if(!user){
            throw new AppError(400,"User not found");
        }
        // console.log(user.__proto__);
        const likeList = user.getResLiked();
        return likeList;
    } catch (error) {
        throw error;
    }
}
// get rate by user
const getRatebyUser = async(userId)=>{
    try {
        const user = await User.findByPk(userId);
        if(!user){
            throw new AppError(400,"User not found");
        };
        // console.log(user.__proto__);
        const rateList = await user.getResRated();
        return rateList;
    } catch (error) {
        throw error;
    }
};
//order
const orderFoods = async(data)=>{
    try {
        const {amount} = data;
        const user = await User.findOne({where:{userId:data.userId}});
        const food = await Food.findOne({where:{foodId:data.foodId}});
        if(!user){
            throw new AppError(400,"User not found");
        };
        if(!food){
            throw new AppError(400,"Food is not available");
        };
        // console.log("proto user",user.__proto__);
        await user.addOrder(data.foodId,{through:{amount:amount}});
        return null;
    } catch (error) {
        throw error;
    }
};


module.exports = {
    createUsers,
    getUsers,
    getLikebyUser,
    getRatebyUser,
    orderFoods
};