const express = require("express")
const cors = require("cors")

const server = express()
server.use(cors())
server.use(express.json())

const videojuegos = [
    {
        id: 1,
        nombre: "The Legend of Zelda: Breath of the Wild",
        descripcion: "Un juego de aventuras y exploración en un mundo abierto donde Link debe salvar Hyrule del malvado Ganon.",
        fecha: 2017
    },
    {
        id: 2,
        nombre: "Elden Ring",
        descripcion: "Un RPG de acción en mundo abierto creado por FromSoftware y George R. R. Martin, con combates desafiantes y una historia épica.",
        fecha: 2022
    },
    {
        id: 3,
        nombre: "Minecraft",
        descripcion: "Un sandbox creativo donde los jugadores pueden construir, explorar y sobrevivir en mundos generados aleatoriamente con bloques.",
        fecha: 2011
    },
    {
        id: 4,
        nombre: "God of War: Ragnarök",
        descripcion: "Kratos y su hijo Atreus deben enfrentar el fin del mundo nórdico en esta secuela cargada de acción y emoción.",
        fecha: 2022
    },
    {
        id: 5,
        nombre: "Red Dead Redemption 2",
        descripcion: "Una epopeya del Salvaje Oeste que sigue la vida de Arthur Morgan en una historia de lealtad, moral y supervivencia.",
        fecha: 2018
    },
    {
        id: 6,
        nombre: "Super Mario Odyssey",
        descripcion: "Mario viaja a diferentes reinos para rescatar a la princesa Peach en una aventura colorida y llena de imaginación.",
        fecha: 2017
    }
]

//endpoint --> CRUD
server.get("/", (request, response) => {
    response.status(200).json({ message: "ok", results: videojuegos })
})

//devolver cantidad
server.get("/games/cant", (req, res) => {
    const cant = videojuegos.length
    if (cant === 0) {
        res.status(404).json({ msg: "No hay videojuegos" })
    } else {
        res.status(200).json({ cantidad: cant })
    }
})
// añadir un nuevo videojuego
server.post("/", (req, res) => {
    const data = req.body // peticion con parametro(body)
    videojuegos.push(data)
    res.json({ succes: true, data: videojuegos })
})

// buscar fecha publicacion = 2025
server.get("/game/:fecha", (req, res) => {
    //const fecha = req.params.fecha
    const { fecha } = req.params
    const gameFound = videojuegos.find(item => item.fecha === parseInt(fecha));
    res.json(gameFound)
})

//url params--> id
server.get("/getgame/:name", (req, res) => {
    const { name } = req.params
    const gameFound = videojuegos.filter((item) => item.nombre.toLowerCase().includes(name.toLowerCase()));
    res.json(gameFound)
})

//http://localhost:5000/getgame?clave=valor&clave=valor 
// query params --> varios datos NO sensibles, filtros, ordenar datos
server.get("/filtergame", (req, res) => {
    const { name } = req.query
    const gameFound = videojuegos.filter((item) => item.nombre.toLowerCase().includes(name.toLowerCase()));
    res.json(gameFound)
})
//http://localhost:5000/filtergamedes?fecha=2022&desc=bloque
server.get("/filtergamedes", (req, res) => {
    const { fecha, desc } = req.query
    const gameFound = videojuegos.filter((item) => item.descripcion.includes(desc) || item.fecha === parseInt(fecha));
    res.json(gameFound)
})

server.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    const position = videojuegos.findIndex(item => item.id === parseInt(id))
    videojuegos.splice(position, 1)
    res.json(videojuegos)
})

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server ejecutandose http://localhost:${PORT}`)
})

/*
rodri, nacho, carlos, saray
orlando, ivan, alonso 

*/