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
// user - like_res - res
User.belongsToMany(Restaurant,{as:'resLiked',through:LikeRes,foreignKey:'userId'});
Restaurant.belongsToMany(User,{as:'userLikes',through:LikeRes,foreignKey:'resId'});

// user - rate_res - res
User.belongsToMany(Restaurant,{as:'resRated',through:RateRes,foreignKey:'userId'});
Restaurant.belongsToMany(User,{as:'userRates',through:RateRes,foreignKey:'resId'});

// user - order - food
Food.belongsToMany(User,{as:"customer",through:Order,foreignKey:'foodId'});
User.belongsToMany(Food,{as:"order",through:Order,foreignKey:"userId"});

// restaurant - food
Food.belongsTo(Restaurant,{as:'restaurant',foreignKey:"resId"});
Restaurant.hasMany(Food,{as:'food',foreignKey:'resId'});

module.exports = {
    sequelize,
    User,
    Restaurant,
    Food,
    Order,
}