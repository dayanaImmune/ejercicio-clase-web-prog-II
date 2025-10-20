const { insertClient, selectClient, deleteById, updateById, selectByid, selectByEmail } = require("../models/client.model");

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
module.exports = { addNewClient, getClients, deleteClienteById, updateClienteById }
