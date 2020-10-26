const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('this is the simple account login')
})

app.listen(PORT, () => {
  console.log(`this express is running on https://localhost:${PORT}`)
})