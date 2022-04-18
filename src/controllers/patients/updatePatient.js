const Patient = require('./../../database/models/Patient')
const errorHandler = require('./../../helpers/errorHandler')

module.exports = {
  async updatePatient (req, res) {
    const { id } = req.params
    const { name, email, birthDate, address, numberStreet, district, zipCode, cityId, cityName, stateAcronym } = req.body

    const patient = await Patient.findOne({
      where: {
        id: id,
        deleted_at: null
      }
    })
    if (!patient) { return res.status(404).json('Patient not found!') }

    try {
      await Patient.update({
        name: name,
        email: email,
        birth_date: birthDate,
        address: address,
        number_street: numberStreet,
        district: district,
        zip_code: zipCode,
        city_id: cityId,
        city_name: cityName,
        state_acronym: stateAcronym
      }, {
        where: {
          id: id,
          deleted_at: null
        },
        limit: 1
      })

      return res.json('Patient updated succefully!')
    } catch ({ errors }) {
      return res.status(400).json(errorHandler.catchHandler(errors[0].message))
    }
  }
}
