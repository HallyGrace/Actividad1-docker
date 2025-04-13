const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Conectar a MongoDB usando el nombre del servicio de la base de datos
mongoose.connect('mongodb://database:27017/mydb', {useNewUrlParser: true});

app.get('/api', (req, res) => {
  res.json({message: 'Hello from backend!'});
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));