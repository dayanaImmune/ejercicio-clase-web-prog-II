// conexion con la BD MONGO DB
const mongoose = require("mongoose")
const connectDb = async () => {
    try {

        const uri = "mongodb+srv://dayana:J94ip1H2aJ9DwnDV@cluster0.fci00lm.mongodb.net/shop?appName=Cluster0"
        const db = await mongoose.connect(uri)
        const { name, host } = db.connection
        console.log(`Base  de datos: ${name} servidor ${host}`)

    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDb
