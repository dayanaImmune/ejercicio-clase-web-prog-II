const router = require("express").Router()
const { addNewClient, getClients, deleteClienteById, updateClienteById, registerClient, login, renderTemplate } = require("../../controllers/client.controllers")


router.post("/client", addNewClient)
router.get("/client", getClients)
router.put("/client/:id", updateClienteById)
router.delete("/client/:id", deleteClienteById)
/**registro, y login */
router.post("/register", registerClient)
router.post("/login", login)
/**renderizar vistas de ejs */
router.get("/plantilla", renderTemplate)

module.exports = router;