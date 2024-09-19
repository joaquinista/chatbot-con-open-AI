const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const app = express();
const PORT = 3000;

// Configuración de la API de OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,  // Asegúrate de usar tu clave aquí
});
const openai = new OpenAIApi(configuration);

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Ruta del chatbot que envía consultas a OpenAI
app.get('/chatbot', async (req, res) => {
  const userQuery = req.query.q || 'Hola';  // Puedes probar con "Hola" por defecto
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: userQuery,
      max_tokens: 150,
    });
    res.send(response.data.choices[0].text.trim());
  } catch (error) {
    console.error(error);
    res.status(500).send('Error procesando la solicitud');
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});