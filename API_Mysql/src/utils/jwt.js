const jwt = require("jsonwebtoken")
const createToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
}
const verifyToken = (token) => {
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY)
        return data
    } catch (error) {
        return false
    }
}
module.exports = { createToken, verifyToken }