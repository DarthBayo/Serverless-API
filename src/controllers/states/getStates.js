const { QueryTypes } = require('sequelize')
const sequelize = require('./../../database/database')

module.exports = {
  async getStates (_, res) {
    const results = await sequelize.query('SELECT * FROM states', {
      type: QueryTypes.SELECT
    })

    return res.json(results)
  }
}
