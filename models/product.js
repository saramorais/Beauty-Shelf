'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    category: {
      type: DataTypes.STRING
    },
    brand: {
      type: DataTypes.STRING
    }
  }, {});
  Product.associate = function(models) {
    Product.belongsToMany(models.User, {
      through: 'UserProduct',
      as: 'users',
      foreignKey: 'product_id'
    });
  };
  return Product;
};