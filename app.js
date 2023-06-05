const express = require('express');
const bodyParser = require('body-parser');
const personaRoutes = require('./routes/personaRoutes');
const mascotaRoutes = require('./routes/mascotaRoutes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar la carpeta de archivos estáticos
app.use(express.static('public'));

// Ruta para renderizar el archivo index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/', (req, res) => {
  res.render('persona');
});

app.get('/', (req, res) => {
  res.render('mascotas');
});


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', personaRoutes);
app.use('/', mascotaRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
