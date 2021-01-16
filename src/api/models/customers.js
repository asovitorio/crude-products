'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('Customers', {
    name: DataTypes.STRING,
    date_birth: DataTypes.DATE,
    email: DataTypes.STRING,
    cellphone: DataTypes.STRING
  }, {
    timestamps: true,
    underscored: true,
    paranoide:true,
    tableName: 'customers'
  });
  Customers.associate = function(models) {
    // associations can be defined here
  };
  return Customers;
};