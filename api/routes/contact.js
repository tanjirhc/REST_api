const express = require('express')
const router = express.Router()

// Get
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello, I am All Contacts Get Route'
  })
})

// POST
router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Hello, I am POST Route'
  })
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