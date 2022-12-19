const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "RateRes",
    {
      userId: {
        type: DataTypes.INTEGER,
        field:'user_id',
      },
      resId: {
        type: DataTypes.INTEGER,
        field:'res_id',
      },
      amount:{
        type: DataTypes.INTEGER,
      },
      dateRate:{
        type:DataTypes.DATE,
        field:'date_rate',
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    },
    {
      tableName: "rate_res",
      // disable createdAt, updatedAt
      timestamps: false,
    }
  );
};
