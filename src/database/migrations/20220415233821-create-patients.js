'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('patients', {
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
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      birth_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      address: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      number_street: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      district: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      zip_code: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      city_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      city_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      state_acronym: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      deleted_at: {
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('patients')
  }
}
