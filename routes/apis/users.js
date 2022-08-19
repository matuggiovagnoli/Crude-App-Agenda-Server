// Importamos el router de express
const router = require('express').Router();
// Importamos bcryptjs
const bcrypt = require('bcryptjs')
// Importamos modelo de la db
const { Users } = require('../../database/db')

// Metodo post para crear un usuario con register
router.post('/register', async (req, res) => {
    // Enciptamos contraseña del usuario
    req.body.contraseña = bcrypt.hashSync(req.body.contraseña, 10);
    // Traemos del modelo el resto de datos y la contraseña encriptada
    const user = await Users.create(req.body);
    res.json(user);
});

// Metodo post para login del usuario
router.post('/login', async (req,res) => {
    // Identificamos que el mail ingresado este en la db de user
    const user = await Users.findOne({ where: { email:req.body.email } });
    if (user) {
        // Desencriptamos la contraseña para compararla con la ingresada
        const passwordCheck = bcrypt.compareSync(req.body.contraseña, user.contraseña);
        if (passwordCheck) {
            // Si todo es correcto pasamos el objeto user al front
            res.json( user )
        } else {
            res.json({ error: 'Usuario y/o contraseña Incorrecta!' })
        }
    } else {
        res.json({ error: 'Usuario y/o contraseña Incorrecta!' })
    }
})

module.exports = router;