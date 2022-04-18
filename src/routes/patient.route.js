const router = require('express').Router()

const patientController = require('./../controllers/patients')

router.post('/', patientController.createPatient)
router.get('/:userId', patientController.getPatientsByUser)
router.put('/', patientController.updatePatient)
router.delete('/:patientEmail', patientController.deletePatient)

module.exports = router
