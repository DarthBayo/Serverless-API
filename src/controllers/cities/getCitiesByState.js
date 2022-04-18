const { QueryTypes } = require('sequelize')
const sequelize = require('./../../database/database')

module.exports = {
  async getCitiesByState (req, res) {
    const { stateId } = req.params

    const results = await sequelize.query('SELECT * FROM cities WHERE state_id = :stateId', {
      replacements: {
        stateId: stateId
      },
      type: QueryTypes.SELECT
    })

    return res.json(results)
  }
}
