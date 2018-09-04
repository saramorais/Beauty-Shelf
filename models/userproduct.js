'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProduct = sequelize.define('UserProduct', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});
  UserProduct.associate = function(models) {
    // associations can be defined here
  };
  return UserProduct;
};