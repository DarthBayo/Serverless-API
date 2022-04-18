module.exports = {
  ...require('./createPatient'),
  ...require('./getPatientsByUser'),
  ...require('./updatePatient'),
  ...require('./deletePatient')
}
