const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Order",
    {
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field:'order_id',
      },
      userId: {
        type: DataTypes.INTEGER,
        field:'user_id',
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        field:'total_price',
      },
    },
    {
      tableName: "orders",
      timestamps: false,
    }
  );
};
