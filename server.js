const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const contactRoute = require('./api/routes/contact')

const app = express()

const PORT = process.env.PORT || 4000

app.use((req, res, next) => {
  console.log('I am a Middleware Function')
  next()
})

app.use('/api/contacts', contactRoute)

app.get('/', (req, res) => {
  res.send('<div><h1>Hello World</h1><p>Hello Fleckians</p></div>')
})


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})

const contacts = [
  {
    name: 'Tanjir Hasan', email: 'tanjirhc@gmail.com'
  },
  { name: 'Rubina Akter', email: 'rubinatanjir@gmail.com'},
  { name: 'Syeda Nishu', email: 'nishuece@gmail.com'}
]