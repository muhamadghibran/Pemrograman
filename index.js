const express = require('express')
const mahasiswaRouter = require('./mahasiswaRouter.js')

const app = express()
const port = 4000
app.use('/',mahasiswaRouter)

app.listen(port, () => {
  console.log('server berjalan di http://localhost:4000') 
})