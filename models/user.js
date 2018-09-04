'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passworddigest: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING
    },
    about: {
      type: DataTypes.TEXT
    },
    location: {
      type: DataTypes.STRING
    },
    skintype: {
      type: DataTypes.STRING
    },
    hairtype: {
      type: DataTypes.STRING
    },
    hairstatus: {
      type: DataTypes.STRING
    }
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Product, {
      through: 'UserProduct',
      as: 'products',
      foreignKey: 'user_id'
    });
  };
  return User;
};