const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate')


const contactController = require('../controllers/contact')


// Get
router.get('/', contactController.getAllContactController)

// POST
router.post('/', authenticate, contactController.postNewContactController)

router.get('/:id', contactController.getSingleContact)

router.put('/:id', contactController.editContact)

router.delete('/:id', contactController.deleteContact)

module.exports = router