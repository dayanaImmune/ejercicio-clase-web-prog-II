const { selectUsers } = require("../models/user.models")

const register = () => {
    console.log("registro de usuario")
}
const getAllusers = () => {
    // va a usar funcionalidades que corresponda al modelo de datos
    console.log("mostrar los usuarios")
    selectUsers()
}
module.exports = { getAllusers, register }