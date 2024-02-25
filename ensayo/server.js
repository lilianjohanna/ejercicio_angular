// Importar las dependencias necesarias
const express = require('express');

// Crear una instancia de Express
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

// Endpoint para la ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API RESTful con Node.js y Express.js!');
});

// Endpoint para una ruta específica (ejemplo)
app.get('/api/usuarios', (req, res) => {
  // Aquí podrías recuperar los datos de la base de datos o de cualquier otra fuente
  const usuarios = [
    { id: 1, nombre: 'Usuario 1' },
    { id: 2, nombre: 'Usuario 2' },
    { id: 3, nombre: 'Usuario 3' }
  ];
  
  res.json(usuarios); // Enviar los datos como JSON
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
