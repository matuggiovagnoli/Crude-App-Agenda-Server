// Importamos Op de sequelize para poder determinar el NOT NULL de un dato
const { Op } = require("sequelize")

// Le damos las caracteristicas de las columnas oara crear una tabla
module.exports = (sequelize, type) => {
    return sequelize.define('contactos', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        nombre: type.STRING,
        telefono: type.INTEGER,
        mail: type.STRING,
        userId: type.INTEGER
    })
}