// Importamos el router de express
const router = require('express').Router();

// Importamos Contactos para acceder a esa tabla en la base de datos
const { Contactos } = require('../../database/db');

router.get('/', async(req, res) => {
    // agregar un filto para que busque los contactos del usuario logueado
    const  agendaCompleta = await Contactos.findAll();
    res.json(agendaCompleta)
});

router.post('/', async (req, res) => {
    const crearContacto = await Contactos.create(req.body)
    res.json(crearContacto)
})

module.exports = router;