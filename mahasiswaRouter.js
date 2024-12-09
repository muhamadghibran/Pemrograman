const express = require('express')
const router = express.Router()
const db = require('./db.js')

router.get('/', (req, res) => {
  db.query('SELECT * FROM mahasiswa', (error,result) => {
    if (error) {
      console.log('Gagal mengambil data mahasiswa')
    }else{
      res.json(result)
    }
  })
})
module.exports = router