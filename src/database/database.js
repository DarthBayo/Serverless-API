require('dotenv').config()
const { Sequelize } = require('sequelize')
const config = require('./../config/database')

const sequelize = new Sequelize(config[`${process.env.NODE_ENV}`])

module.exports = sequelize
