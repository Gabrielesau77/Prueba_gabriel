"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "transaction",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      amount: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "transactions",
      classMethods: {},
    }
  );
  Transaction.associate = function (models) {
    // associations can be defined here
  };
  return Transaction;
};
