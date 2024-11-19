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
  console.log(req.url);
  res.json({
    id: req.url
  })
})

module.exports = router