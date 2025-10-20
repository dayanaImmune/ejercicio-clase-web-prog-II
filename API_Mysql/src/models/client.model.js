const pool = require("../config/conex")

const insertClient = async (client) => {
    const { nombre, email, password, fk_plan } = client;
    const insert = "INSERT INTO cliente (nombre, email, password,fk_plan) values(?,?,?,?)";
    const [result] = await pool.query(insert, [nombre, email, password, fk_plan])
    return result
}
const selectClient = async () => {
    const select = "SELECT * FROM  cliente";
    const [result] = await pool.query(select)
    return result
}
const deleteById = async (id) => {
    const sqlDelete = "DELETE FROM cliente where idcliente= ?";
    const [result] = await pool.query(sqlDelete, [id])
    return result
}
const updateById = async (id, cliente) => {
    const updateCliente = "UPDATE cliente SET  nombre= ?, password= ?, email= ? WHERE idcliente= ?";
    const [result] = await pool.query(updateCliente, [cliente.nombre, cliente.password, cliente.email, id])
    return result
}
const selectByid = async (id) => {
    const sql = "SELECT * FROM cliente WHERE idcliente =  ?";
    const [result] = await pool.query(sql, [id])
    return result;
}
const selectByEmail = async (email) => {
    const sql = "SELECT * FROM cliente WHERE email =  ?";
    const [result] = await pool.query(sql, [email])
    return result;
}
module.exports = { insertClient, selectClient, deleteById, updateById, selectByid, selectByEmail }