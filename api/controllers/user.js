const User = require('../models/User')

const registerController = (req, res, next) => {
  let user = new User({
    email: req.body.email,
    
  })
}