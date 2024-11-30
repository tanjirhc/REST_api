const bcrypt = require('bcrypt')

const User = require('../models/User')

const registerController = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.json({
        error: err
      })
    }
    
    let user = new User({
      email: req.body.email,
      password: hash
    })

    user.save()
      .then(result => {
        res.status(201).json({
          message: 'User Created Successfully',
          user: result
        })
      })
      .catch(error => {
        res.json({
          error
        })
      })

  })
}

const getAllUser = (req, res, next) => {
  User.find()
    .then(users => {
      res.json({
        users
      })
    })
}

module.exports = {
  registerController
}