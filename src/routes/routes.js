const router = require('express').Router()

const patientRoute = require('./patient.route')

router.use('/patient', patientRoute)

module.exports = router