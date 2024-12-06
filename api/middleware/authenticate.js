const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {

  try {

  } catch(error) {
    res.json({
      message: "Authentication Failed"
    })
  }
}