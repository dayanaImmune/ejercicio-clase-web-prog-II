const jwt = require("jsonwebtoken")
const createToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
}
module.exports = { createToken }