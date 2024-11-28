const express = require('express')
const router = express.Router()

const contacts = []

// Get
router.get('/', (req, res, next) => {
  res.status(200).json({
    contacts
  })
})

// POST
router.post('/', (req, res, next) => {

  contacts.push({
    name: req.body.name,
    email: req.body.email
  })

  res.status(201).json({
    message: 'Data Saved',
   
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