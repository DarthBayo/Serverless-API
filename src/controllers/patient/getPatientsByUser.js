const Patient = require('./../../database/models/Patient')
const errorHandler = require('./../../helpers/errorHandler')

module.exports = {
  async getPatientsByUser (req, res) {
    const userId = req.headers['user-id']

    try {
      const patients = await Patient.findAll({
        where: {
          user_id: userId,
          deleted_at: null
        }
      })

      return res.json(patients)
    } catch ({ errors }) {
      return res.status(404).json(errorHandler.catchHandler(errors[0].message))
    }
  }
}
