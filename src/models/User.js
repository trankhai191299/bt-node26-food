const { DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  return sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field:'user_id',
      },
      firstName: {
        type: DataTypes.STRING(50),
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING(50),
        field: "last_name",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "email",
        validate: {
          isEmail: {
            msg: "invalid email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          const salt = bcrypt.genSaltSync();
          const hashedPassword = bcrypt.hashSync(value, salt);
          this.setDataValue("password", hashedPassword);
        },
      },
    },
    {
      tableName: "users",
      timestamps: false,
      defaultScope: {
        attributes: {
          exclude: ["password"],
        },
      },
      hooks: {
        afterSave: (record) => {
          delete record.dataValues.password;
        },
      },
    }
  );
};
