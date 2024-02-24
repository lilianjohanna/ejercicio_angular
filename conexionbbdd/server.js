// server.js

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'abcpublicar.com',
  user: 'abcpubli_usrangular',
  password: 'Angular1234*',
  database: 'abcpubli_conexionangular'
});

connection.connect();

// Ruta para obtener datos de la base de datos
app.get('/api/datos', (req, res) => {
  connection.query('SELECT * FROM lista', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
