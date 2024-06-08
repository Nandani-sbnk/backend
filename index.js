require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hell World!')
})

app.get('/name', (req, res) => {
    res.send('Nandani')
  })
  
  app.get('/nameh1', (req, res) => {
    res.send(" <h1>.... Bamboo Harvesting .... </h1>")
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
