const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "OrderDetail",
    {
      orderId: {
        type: DataTypes.INTEGER,
        field:'order_id',
      },
      foodId:{
        type: DataTypes.INTEGER,
        field:'food_id'
      },
      quanity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "orderdetails",
      timestamps: false,
    }
  );
};
