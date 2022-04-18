const Patient = require('./../../database/models/Patient')
const errorHandler = require('./../../helpers/errorHandler')

module.exports = {
  async deletePatient (req, res) {
    const { patientEmail } = req.params

    try {
      await Patient.update({
        deleted_at: new Date()
      }, {
        where: {
          email: patientEmail,
          deleted_at: null
        },
        limit: 1
      })

      return res.end()
    } catch ({ message }) {
      return res.status(400).json(errorHandler.catchHandler(message))
    }
  }
}
