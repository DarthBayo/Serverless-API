const router = require('express').Router()

const userController = require('./../controllers/users')

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.put('/:userEmail', userController.updateUser)
router.delete('/:userEmail', userController.deleteUser)

module.exports = router
