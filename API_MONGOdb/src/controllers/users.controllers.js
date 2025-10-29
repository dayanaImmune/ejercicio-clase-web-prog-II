const bcrypt = require("bcryptjs")
const User = require("../models/user.models")
const Product = require("../models/product.models")

const register = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const result = await User.insertOne(req.body)
    //enviar un email al usuario
    res.json(result)

}
const addCart = async (req, res) => {
    const { idP, idU, cant } = req.body
    const userDB = await User.findById(idU)
    if (!userDB) {
        res.status(404).json({ msg: ">El usuario no existe" })
    }
    const productDB = await Product.findById(idP)
    if (!productDB) {
        res.status(404).json({ msg: ">El producto no existe" })
    }
    //const result = await User.findByIdAndUpdate(idU, { $push: { cart: idP } }, { new: true })
    const result = await User.updateOne(
        { _id: idU, "cart.productId": idP },
        { $set: { "cart.$.cant": cant } }
    )
    if (result.matchedCount === 0) {
        const result = await User.findByIdAndUpdate(idU, {
            $push:
                { cart: { productId: idP, cant: cant } }
        }, { new: true })
        res.json(result)
    }
    res.json(result)

}

const getAllusers = async (req, res) => {
    const data = await User.find().populate("carts", "name price")
    res.json(data)
}
const getCartByUser = async (req, res) => {
    const data = await User.findById(req.params.id).populate("carts", "name price")
    res.json(data.cart)
}
module.exports = { getAllusers, register, addCart, getCartByUser }
