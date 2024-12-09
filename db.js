const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'muhamad ghibran ti23a'
})

connection.connect( (error) => {
  if (error) {
    console.log('Gagal koneksi ke database', error)
  }else {
    console.log('Berhasil Koneksi ke database')
  }
})
module.exports = connection