const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const router = require("./src/routes/users.routes")
dotenv.config()

const server = express()
server.use(cors())
server.use(express.json())
server.use("/user", router)

server.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})