const router = require('express').Router()

const userRoutes = require('./user.route')
const patientRoutes = require('./patient.route')

router.use('/users', userRoutes)
router.use('/patients', patientRoutes)

module.exports = router
