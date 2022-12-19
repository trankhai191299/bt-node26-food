const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Food",
    {
      foodId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field:'food_id',
      },
      resId:{
        type: DataTypes.INTEGER,
        field:'res_id'
      },
      foodName: {
        type: DataTypes.STRING,
        field:'food_name',
      },
      singlePrice: {
        type: DataTypes.FLOAT,
        field:'single_price',
      },
    },
    {
      tableName: "foods",
      timestamps: false,
    }
  );
};
