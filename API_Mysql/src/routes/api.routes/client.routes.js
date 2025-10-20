const router = require("express").Router()
const { addNewClient } = require("../../controllers/client.controllers")



router.post("/client", addNewClient)
router.get("/client", () => { })
router.put("/client/:id", () => { })
router.delete("/client/:id", () => { })
module.exports = router;