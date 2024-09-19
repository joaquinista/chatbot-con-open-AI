const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Ruta de chatbot (lógica del chatbot)
app.get('/chatbot', (req, res) => {
  res.send('Aquí irá la respuesta del chatbot.');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});