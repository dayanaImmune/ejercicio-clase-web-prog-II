const router = require("express").Router()
const planControll = require("../../controllers/plan.controllers")
const { authClient, checkAdmin } = require("../../middleware/auth")

// rutas privadas 
router.post("/", authClient, checkAdmin, planControll.addNewPlan)
module.exports = router
