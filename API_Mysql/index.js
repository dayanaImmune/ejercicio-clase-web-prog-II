const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const router = require("./src/routes/api.routes")

const server = express()
server.use(cors())
server.use(express.json())
server.use("/api", router)

server.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})