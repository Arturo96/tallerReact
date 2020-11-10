const express = require('express');
const dbConnection = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// Crear el servidor de express
const app = express();

const port = process.env.PORT || 4000;

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio Público

app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas

// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth') );

// TODO: CRUD: Eventos
app.use('/api/events', require('./routes/events'));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}...`);
});

