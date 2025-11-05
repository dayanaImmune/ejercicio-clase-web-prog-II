const router = require("express").Router()

const { getAllusers, register } = require("../controllers/users.controllers")


router.post("/register", register)
router.get("/getusers", getAllusers)

module.exports = router