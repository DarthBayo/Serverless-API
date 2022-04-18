const router = require('express').Router()

const cityController = require('./../controllers/cities')

router.get('/:stateId', cityController.getCitiesByState)

module.exports = router
