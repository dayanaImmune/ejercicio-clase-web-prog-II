// conexion con la BD
const mysql = require("mysql2");
const pool = mysql.createPool({
    user: process.env.USER_DB,
    port: process.env.PORT_DB,
    password: process.env.PASSWORD_DB,
    host: process.env.HOST_DB,
    database: process.env.NAME_DB,
})
module.exports = pool.promise()