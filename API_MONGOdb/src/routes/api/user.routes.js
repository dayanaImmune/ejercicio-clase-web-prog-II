const router = require("express").Router()
const { register, addCart, getCartByUser } = require("../../controllers/users.controllers")

router.post("/add", register)
router.put("/addTocart", addCart)
router.get("/user/:id", getCartByUser)

module.exports = router