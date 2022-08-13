const Sequelize = require('sequelize');

// Importamos los modelos ya creados de las tablas
const UserModel = require('../models/users');
const ContactModel = require('../models/contactos')

// Ingresamos nombre de usuario, nombre de db, pass.
const sequelize = new Sequelize('QWzwOQ2ggF', 'QWzwOQ2ggF', '8XV7nrddnN', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

// Inicializamos los modelos
const Users = UserModel(sequelize, Sequelize);
const Contactos = ContactModel(sequelize, Sequelize);

// Forzamos que en el caso de no haber una tabla la cree y si ya esta creada se sincroniza.
sequelize.sync({ force: false })
    .then(() => {
        console.log('Tabla sincronizadas')
    })

module.exports = {
    Users,
    Contactos
}