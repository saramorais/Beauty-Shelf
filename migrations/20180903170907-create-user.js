'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      passworddigest: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.STRING
      },
      skintype: {
        type: Sequelize.STRING
      },
      hairtype: {
        type: Sequelize.STRING
      },
      hairstatus: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};