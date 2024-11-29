const express = require('express')
const router = express.Router()


const contactController = require('../controllers/contact')


// Get
router.get('/', contactController.getAllContactController)

// POST
router.post('/', contactController.postNewContactController)

router.get('/:id', contactController.getSingleContact)

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