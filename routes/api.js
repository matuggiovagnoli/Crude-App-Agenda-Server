// Importamos el router de express
const router = require('express').Router();

// declaramos los gestores de rutas
const apiContactRouter = require('./apis/contact');
const apiUserRouter = require('./apis/users');

// aclaramos el gestor de ruta maneja la informacion 
router.use('/contact', apiContactRouter);
router.use('/users', apiUserRouter);


module.exports = router;