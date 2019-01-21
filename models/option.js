"use strict";
module.exports = (sequelize, dataTypes) => {
  const Option = sequelize.define(
    "Option",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }, // primary key
      text: {
        type: dataTypes.TEXT,
        allowNull: false
      },
      poll_id: {
        type: dataTypes.INTEGER,
        onDelete: "CASCADE"
      }
    },
    {
      freezeTableName: true,
      underscored: true,
      tableName: "options"
    }
  );

  Option.associate = function(models) {
    Option.belongsTo(models.Poll, {
      foreignKey: "poll_id"
    });
  };

  return Option;
};
