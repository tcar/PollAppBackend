"use strict";
module.exports = (sequelize, dataTypes) => {
  const Vote = sequelize.define(
    "Vote",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }, // primary key

      option_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        unique: true,
        onDelete: "CASCADE"
      },
      user_id: {
        type: dataTypes.INTEGER
      },
      ip: {
        type: dataTypes.TEXT
      }
    },
    {
      freezeTableName: true,
      underscored: true,
      tableName: "votes",
      indexes: [
        {
          fields: ["option_id", "user_id", "ip"],
          unique: true
        }
      ]
    }
  );

  Vote.associate = function(models) {
    Vote.belongsTo(models.Option, {
      foreignKey: "option_id"
    });
  };

  return Vote;
};
