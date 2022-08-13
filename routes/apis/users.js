// Importamos el router de express
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('el gestor de rutas de usuarios funciona!!!');
});

module.exports = router;