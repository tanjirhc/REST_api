const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('<div><h1>Hello World</h1><p>Hello Fleckians</p></div>')
})

app.get('/posts', (req, res) => {
  res.send('<h1>I am post page</h1>')
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})