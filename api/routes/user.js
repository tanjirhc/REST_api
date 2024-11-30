const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

router.post('/login', (req, res, next) => {

})

router.post('/register', userController.registerController)

router.get('/users', userController.getAllUser)

module.exports = router