const router = require("express").Router()
const { addNewClient, getClients, deleteClienteById, updateClienteById, registerClient, login } = require("../../controllers/client.controllers")


router.post("/client", addNewClient)
router.get("/client", getClients)
router.put("/client/:id", updateClienteById)
router.delete("/client/:id", deleteClienteById)
/**registro, y login */
router.post("/register", registerClient)
router.post("/login", login)

module.exports = router;