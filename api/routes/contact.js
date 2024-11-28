const express = require('express')
const router = express.Router()

const Contact = require('../models/Contact')


// Get
router.get('/', (req, res, next) => {
  Contact.find()
    .then(contacts => {
      res.status(200).json({
        message: 'All Contacts',
        contacts
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: 'Error Occured',
        error: err
      })
    })
})

// POST
router.post('/', (req, res, next) => {

  const contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email
  })
  
  contact.save()
   .then(data => {
    res.status(201).json({
      message: 'Contact Added',
      contact: data
    })
   })
   .catch(err => {
    console.log(err)
    res.status(500).json({
      message: 'Error Occured',
      error: err
    })
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