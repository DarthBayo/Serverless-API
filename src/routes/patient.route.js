const router = require('express').Router()

const patientController = require('../controllers/patient.controller')

router.get('/', patientController.getPatient)

module.exports = router