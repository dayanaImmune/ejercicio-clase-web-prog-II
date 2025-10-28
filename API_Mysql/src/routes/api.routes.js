const router = require("express").Router()

router.use("/", require("./api.routes/client.routes"))
router.use("/plan", require("./api.routes/plan.routes"))

module.exports = router
