const sequelize = require('./../../database/database')

module.exports = {
  async getStates (_, res) {
    const results = await sequelize.query('SELECT * FROM states')

    return res.json(results)
  }
}
