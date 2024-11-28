const Contact = require('../models/Contact')

const getAllContactController = (res, res, next) => {
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