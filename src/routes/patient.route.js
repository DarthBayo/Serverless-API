const router = require('express').Router()
// const User = require('./../database/models/User')

const patientController = require('./../controllers/patients')

router.use(async (req, res, next) => {
  const userId = req.headers['user-id']

  if (!userId) { return res.status(404).json('User not found!') }

  next()
})

router.post('/', patientController.createPatient)
router.get('/', patientController.getPatientsByUser)
router.put('/:id', patientController.updatePatient)
router.delete('/', patientController.deletePatient)

module.exports = router
