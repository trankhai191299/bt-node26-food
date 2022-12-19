const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Order",
    {
      userId: {
        type: DataTypes.INTEGER,
        field:'user_id',
      },
      foodId:{
        type: DataTypes.INTEGER,
        field:'food_id',
      },
      amount: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "orders",
      timestamps: false,
    }
  );
};
