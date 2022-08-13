const express = require('express');
const bodyParser = require ('body-parser');

// import del manejo de rutas
const apiRouter = require('./routes/api');

const app = express();

// traemos la db para su utilizacion
require ('./database/db');

// utilizacion del bodyparse para Post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Toedas las rutas que entren al servidor con /api lo gestiona apiRouter
app.use('/api', apiRouter)

// Settings del Server y comprobamos que funciona
app.listen(3001, () => {
    console.log('Server Funcionando!')
})

