const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (rea, res) => {
  res.send('<h1>Hello World</h1>')
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})