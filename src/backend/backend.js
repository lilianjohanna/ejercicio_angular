const express = require('express');
const mysql = require('mysql');

const app = express();

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'abcpublicar.com',
  user: 'abcpubli_usrangular',
  password: 'Angular1234*',
  database: 'abcpubli_conexionangular'
});

// Conecta a la base de datos MySQL
connection.connect();

// Ruta para obtener los datos del select
app.get('/datos-select', (req, res) => {
  connection.query('SELECT id, nombre FROM lista', (error, results, fields) => {
    if (error) {
      console.error('Error al ejecutar la consulta: ', error);
      res.status(500).json({ error: 'Error al obtener los datos' });
      return;
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
