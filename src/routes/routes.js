const router = require('express').Router()

const userRoutes = require('./user.route')
const patientRoutes = require('./patient.route')
const stateRoutes = require('./state.route')
const cityRoutes = require('./city.route')

router.use('/users', userRoutes)
router.use('/patients', patientRoutes)
router.use('/states', stateRoutes)
router.use('/cities', cityRoutes)

module.exports = router
