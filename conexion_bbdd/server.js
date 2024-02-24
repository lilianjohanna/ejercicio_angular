const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Configura el middleware CORS
app.use(cors());

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: '190.8.176.29',
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
