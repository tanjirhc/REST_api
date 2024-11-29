const Contact = require('../models/Contact')

const getAllContactController = (req, res, next) => {
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
}

const postNewContactController = (req, res, next) => {
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
}

const getSingleContact = (req, res, next) => {
  let id = req.params.id
  console.log(id)
  next()
}

module.exports = {
  getAllContactController,
  postNewContactController,
  getSingleContact
}