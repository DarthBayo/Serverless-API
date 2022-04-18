const Patient = require('./../../database/models/Patient')
const errorHandler = require('./../../helpers/errorHandler')

module.exports = {
  async createPatient (req, res) {
    const userId = req.headers['user-id']
    const { name, email, birthDate, address, numberStreet, district, zipCode, cityId, cityName, stateAcronym } = req.body

    try {
      const [patient, isNewRecord] = await Patient.findOrCreate({
        where: {
          user_id: userId,
          email: email,
          deleted_at: null
        },
        defaults: {
          user_id: userId,
          name: name,
          birth_date: birthDate,
          address: address,
          number_street: numberStreet,
          district: district,
          zip_code: zipCode,
          city_id: cityId,
          city_name: cityName,
          state_acronym: stateAcronym
        }
      })

      const httpStatus = isNewRecord ? 201 : 200

      return res.status(httpStatus).json(patient.id)
    } catch ({ errors }) {
      return res.status(400).json(errorHandler.catchHandler(errors[0].message))
    }
  }
}
