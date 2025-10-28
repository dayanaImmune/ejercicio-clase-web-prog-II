const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const router = require("./src/routes/api.routes")
dotenv.config()

const connectDb = require("./src/config/conex")
connectDb()
const server = express()
server.use(cors())
server.use(express.json())
server.use("/api", router)

server.use((error, req, res, next) => {
    console.log(error.stack)
    res.status(5000).json({ msg: error.message })
})
server.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})