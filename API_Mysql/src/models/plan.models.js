const pool = require("../config/conex")

const insertPlan = async (plan) => {
    const { nombre, precio } = plan;
    const insert = "INSERT INTO plan (nombre,precio) values(?,?)";
    const [result] = await pool.query(insert, [nombre, precio])
    return result.insertId
}

module.exports = { insertPlan }