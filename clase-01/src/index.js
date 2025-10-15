//import 
const express = require("express")
const cors = require("cors")

const server = express()
server.use(cors()) // acepte peticiones desde cualquier lugar

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`server ejecutando http://localhost:${PORT}`)
})

// endpoints--> conjunto ruta, method, funcionalidad
//GET, POST, DELETE, PUT, PATCH

server.get("/students", (req, res) => {
    //req--> request --> solicitud que me han hecho
    //res --> response--> respuesta que voy a devolver
    const stu = {
        name: "Anacleta", lastname: "ruiz"
    }
    res.json({ pepino: true, data: stu })
})
