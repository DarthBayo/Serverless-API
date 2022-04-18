const router = require('express').Router()

const stateController = require('./../controllers/states')

router.get('/', stateController.getStates)

module.exports = router
