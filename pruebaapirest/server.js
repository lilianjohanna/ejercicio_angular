const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'encuesta_migracion'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión con la base de datos:', err);
    return;
  }
  console.log('Conexión establecida con la base de datos MySQL');
});

app.use(cors());

app.get('/select-options', (req, res) => {
  const query = 'SELECT id,nombre FROM departamentos';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).json({ error: 'Error al obtener las opciones para el select' });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
