const { DataTypes } = require('sequelize')
const sequelize = require('./../database')

const Patient = sequelize.define('Patient', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number_street: {
    type: DataTypes.STRING,
    allowNull: false
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false
  },
  zip_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  city_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state_acronym: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  deleted_at: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'patients'
})

module.exports = Patient
