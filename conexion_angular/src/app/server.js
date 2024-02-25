const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'abcpubli_usrangular',
  password: 'Angular1234*',
  database: 'abcpubli_conexionangular'
});

const server = app.listen({
  host: 'localhost',
  port: 3000,
  // Aumenta el tiempo de espera (en milisegundos)
  timeout: 120000, // 2 minutos
});

connection.connect();

app.get('/opciones', (req, res) => {
  connection.query('SELECT id, nombre FROM lista', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});