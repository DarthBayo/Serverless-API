'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('states', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      acronym: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('states')
  }
};
