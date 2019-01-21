"use strict";
module.exports = (sequelize, dataTypes) => {
  const Poll = sequelize.define(
    "Poll",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }, // primary key
      title: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      user_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE"
      }
    },
    {
      freezeTableName: true,
      underscored: true,
      tableName: "polls"
    }
  );

  Poll.associate = function(models) {
    Poll.belongsTo(models.User, {
      foreignKey: "user_id"
    });
    Poll.hasMany(models.Option);
  };

  return Poll;
};
