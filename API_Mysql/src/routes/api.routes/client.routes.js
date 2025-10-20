const router = require("express").Router()
const { addNewClient, getClients, deleteClienteById, updateClienteById } = require("../../controllers/client.controllers")


router.post("/client", addNewClient)
router.get("/client", getClients)
router.put("/client/:id", updateClienteById)
router.delete("/client/:id", deleteClienteById)
module.exports = router;