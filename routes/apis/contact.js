// Importamos el router de express
const router = require('express').Router();

// Importamos Contactos para acceder a esa tabla en la base de datos
const { Contactos } = require('../../database/db');

// Metodo GET y que obtenemos al realizar la llamada
router.get('/:userId', async(req, res) => {
    //  IMPORTANTE
    // agregar un filto para que busque los contactos del usuario logueado
    const  agendaCompleta = await Contactos.findAll({
        where: {
            userId: req.params.userId
        }
    });
    res.json(agendaCompleta)
});

// Metodo POST creacion de contenido en la tabla
router.post('/', async (req, res) => {
    const crearContacto = await Contactos.create(req.body)
    res.json(crearContacto)
})

// Metodo UPDATE modificacion del contenido
router.put('/:contactId', async (req, res) => {
    await Contactos.update(req.body, {
        where: { id : req.params.contactId }
    });
    res.json({ success: "Modificacion exitosa!" });
})

// Metodo DELETE borrar lo seleccionado
router.delete('/:contactId', async (req, res) => {
    await Contactos.destroy({
        where: { id : req.params.contactId }
    })
    res.json({ success: "Se ha eliminado el contacto." })
})

module.exports = router;