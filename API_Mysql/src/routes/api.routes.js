const router = require("express").Router()

router.use("/", require("./api.routes/client.routes"))

module.exports = router