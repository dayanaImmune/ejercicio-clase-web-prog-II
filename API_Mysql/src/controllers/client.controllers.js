const bcrypt = require("bcrypt")
const { insertClient, selectClient, deleteById, updateById, selectByid, selectByEmail } = require("../models/client.model");
const { createToken } = require("../utils/jwt");

const addNewClient = async (req, res) => {
    try {
        const client = req.body;
        const selectedEmail = await selectByEmail(req.body.email)

        if (selectedEmail.length !== 0) {
            res.json({ msg: "El email ya existe" })
        }
        else {
            const resultClient = await insertClient(client)
            res.json({ msg: "todo ok", insertId: resultClient.insertId })
        }

    } catch (error) {
        console.log(error)
    }
}
const getClients = async (req, res) => {
    const result = await selectClient()
    res.json(result)
}
const deleteClienteById = async (req, res) => {

    const { id } = req.params
    const clientSelect = await selectByid(id)
    if (clientSelect.length === 0) {
        res.status(404).json({ msg: "El usuario a modficar no existe" })
    } else {
        const result = await deleteById(req.params.id)
        res.json(result)
    }
    const result = await deleteById(req.params.id)
    res.json(result)
}
const updateClienteById = async (req, res) => {
    try {
        const { id } = req.params
        const clientSelect = await selectByid(id)
        if (clientSelect.length === 0) {
            res.status(404).json({ msg: "El usuario a modficar no existe" })
        }
        else {
            const data = await updateById(id, req.body)
            if (data.affectedRows !== 0) {
                res.status(200).json({ success: true, msg: "cliente modificado con exito" })
            }
        }
    } catch (error) {
        console.log(error)
    }
}
const registerClient = async (req, res) => {
    try {
        const client = req.body
        const clientDb = await selectByEmail(client.email)
        if (clientDb.length !== 0) {
            return res.status(400).json({ success: false, msg: "El email ya existe" })
        }
        client.password = bcrypt.hashSync(client.password, 10)
        const result = await insertClient(client)
        return res.status(202).json({ success: true, insertId: result.insertId })
    } catch (error) {
        res.status(500).json({ success: false, msg: error })
    }
}
const login = async (req, res) => {
    try {
        const clientBody = req.body
        const clientDB = await selectByEmail(clientBody.email)
        if (clientDB.length === 0) {
            return res.status(404).json({ success: false, msg: "El email no existe" })
        }
        const isSame = bcrypt.compareSync(clientBody.password, clientDB[0].password)
        if (!isSame) {
            return res.status(400).json({ success: false, msg: "Contraseña incorrecta" })
        }
        //crear token
        const token = createToken({ id: clientDB[0].idcliente, email: clientDB[0].email, rol: clientDB[0].rol })
        return res.status(200).json({ success: true, msg: token })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, msg: error })
    }
}

const renderTemplate = (req, res) => {

    res.render("home", { data: ["maria", "luis"] })
}
module.exports = { addNewClient, getClients, deleteClienteById, updateClienteById, registerClient, login, renderTemplate }
