"use strict";
module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }, // primary key
      email: {
        type: dataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      password: {
        type: dataTypes.TEXT,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      underscored: true,
      tableName: "users"
    }
  );

  User.associate = function(models) {
    User.hasMany(models.Poll);
  };

  return User;
};
