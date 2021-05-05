const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('</h1>Test Chat App</h1>')
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Console Log on Port ${PORT}`)
})
