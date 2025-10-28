const { verifyToken } = require("../utils/jwt");

const authClient = (req, res, next) => {
    try {
        const tokenHeader = req.headers.authorization;
        if (!tokenHeader) {
            return res.json({ msg: "No existe el token" })
        }
        //Bearer fcgvhbjnkml.sdfvgbhnbjmnklñmgfdsdfghjkljhgfdsdfghjkkljhgfdsadfgh
        const token = tokenHeader.split(" ")[1];
        const resultToken = verifyToken(token)
        if (!resultToken) {
            return res.json({ msg: "El token es invalido" })
        }
        req.informacionCliente = resultToken
        //resultToken.rol ???
        next()
    } catch (error) {

    }
}
const checkAdmin = (req, res, next) => {
    const { rol } = req.informacionCliente
    if (rol != "A") {
        return res.json({ msg: "Debe ser un administrador" })
    }
    next()
}
module.exports = { authClient, checkAdmin }