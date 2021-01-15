'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    photo: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};