const bcrypt = require('bcrypt')

const User = require('../models/User')

const registerController = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.json({
        error: err
      })
    }
    
    let user = new user({
      email: req.body.email,
      password: hash
    })
  })
}

module.exports = {
  registerController
}