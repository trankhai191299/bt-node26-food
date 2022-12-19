const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Restaurant",
    {
      resId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field:'res_id',
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field:'res_name',
      },
      description: {
        type: DataTypes.STRING,
        field:'descr',
      },
    },
    {
      tableName: "restaurants",
      timestamps: false,
    }
  );
};
