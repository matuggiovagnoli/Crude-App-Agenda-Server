// Sequelize se maneja con modelos para crear y modificar las tablas

// Le damos las caracteristicas de las columnas oara crear una tabla
module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: type.STRING,
        contraseña: type.STRING,
        email: type.STRING
    })
}