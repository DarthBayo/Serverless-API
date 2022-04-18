const router = require('express').Router()

const userController = require('./../controllers/users')

router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.put('/', userController.updateUser)
router.delete('/', userController.deleteUser)

module.exports = router
