const router = require("express").Router()

router.use("/product", require("./api/product.routes"))
router.use("/user", require("./api/user.routes"))


module.exports = router