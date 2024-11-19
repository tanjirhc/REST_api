const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('<div><h1>Hello World</h1><p>Hello Fleckians</p></div>')
})

app.get('/posts', (req, res) => {
  res.send('<h1>I am post page</h1>')
})

app.get('/api/contacts', (req, res) => {
  res.json(contacts)
})

app.post('/api/contacts', (req, res) => {
  res.json({
    message: 'I am post method'
  })
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