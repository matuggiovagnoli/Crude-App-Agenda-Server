// Sequelize se maneja con modelos para crear y modificar las tablas

// Importamos Op de sequelize para poder determinar el NOT NULL de un dato
const { Op } = require("sequelize")

// Le damos las caracteristicas de las columnas oara crear una tabla
module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        username: {
            type: type.STRING,
            [Op.ne] : null
        },
        contraseña: {
            type: type.STRING,
            [Op.ne] : null
        },
        email: {
            type: type.STRING,
            [Op.ne] : null
        }
    })
}