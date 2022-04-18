const Patient = require('./../../database/models/Patient')
const errorHandler = require('./../../helpers/errorHandler')

module.exports = {
  async deletePatient (req, res) {
    const userId = req.headers['user-id']
    const patientEmail = req.headers['patient-email']

    const patient = await Patient.findOne({
      where: {
        email: patientEmail,
        deleted_at: null
      }
    })
    if (!patient) { return res.status(404).json('User not found!') }

    try {
      await Patient.update({
        deleted_at: new Date()
      }, {
        where: {
          user_id: userId,
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
