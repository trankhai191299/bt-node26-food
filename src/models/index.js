const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node26-food", "root", "1234", {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Sequelize Connected");
    } catch (error) {
        console.log("Sequelize Error", error);
    }
})();

const User = require("./User")(sequelize);
const Restaurant = require("./Restaurant")(sequelize);
const LikeRes = require("./LikeRes")(sequelize);
const RateRes = require("./RateRes")(sequelize);
const Order = require("./Order")(sequelize);
const Food = require("./Food")(sequelize);
const OrderDetail = require("./OrderDetail")(sequelize);
// user - like_res - res
User.belongsToMany(Restaurant,{as:'resLiked',through:LikeRes,foreignKey:'userId'});
Restaurant.belongsToMany(User,{as:'userLikes',through:LikeRes,foreignKey:'resId'});

// user - rate_res - res
User.belongsToMany(Restaurant,{as:'resRated',through:RateRes,foreignKey:'userId'});
Restaurant.belongsToMany(User,{as:'userRates',through:RateRes,foreignKey:'resId'});

// user - order
Order.belongsTo(User,{as:"customer",foreignKey:'userId'});
User.hasMany(Order,{as:"order",foreignKey:"userId"});

// restaurant - food
Food.belongsTo(Restaurant,{as:'restaurant',foreignKey:"resId"});
Restaurant.hasMany(Food,{as:'food',foreignKey:'resId'});

// order - order_detail - food
Order.belongsToMany(Food,{as:'foodOrdered',through:OrderDetail,foreignKey:'orderId'});
Food.belongsToMany(Order,{as:'order',through:OrderDetail,foreignKey:'foodId'});

module.exports = {
    sequelize,
    User,
    Restaurant,
}