const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (rea, res) => {
  res.send('<div><h1>Hello World</h1><p>Hello Fleckians</p></div>')
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})