const express = require('express')
const router = express.Router()

const Contact = require('../models/Contact')


// Get
router.get('/', (req, res, next) => {
  
})

// POST
router.post('/', (req, res, next) => {

  
})

router.get('/:id', (req, res, next) => {  
  res.json({
    message: 'I am a single Contact'
  })
})

router.put('/:id', (req, res, next) => {  
  res.json({
    message: 'I am a PUT Route'
  })
})

router.delete('/:id', (req, res, next) => {  
  res.json({
    message: 'I am a Delete Route'
  })
})

module.exports = router