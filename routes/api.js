// Importamos el router de express
const router = require('express').Router();

// declaramos los gestores de rutas
const apiContactRouter = require('./apis/contact');
const apiUserRouter = require('./apis/users');

// aclaramos cual de los gestores de rutas maneja la informacion recibida
router.use('/contact', apiContactRouter);
router.use('/users', apiUserRouter);


module.exports = router;