// server.js

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const connection = mysql.createConnection({
  host: 'abcpublicar.com',
  user: 'abcpubli_usrangular',
  password: 'Angular1234*',
  database: 'abcpubli_conexionangular'
});

connection.connect();

app.get('/select-datos', (req, res) => {
  connection.query('SELECT * FROM lista', (error, results) => {
    if (error) throw error;
    console.log(`Conexión correcta`);
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
