const Product = require("../models/product.models")



const getAllProducts = async (req, res) => {

    const listProducts = await Product.find()
    res.json(listProducts)
}
const getProductId = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.json(product)
}

const getPrice = async (req, res) => {
    const { max, min } = req.query
    const result = await Product.find({
        price: { $gte: min, $lte: max }
    })
    res.json(result)
}

const insertProduct = async (req, res) => {
    const findproduct = await Product.findOne({ name: req.body.name })
    if (!findproduct) {
        const result = await Product.create(req.body)
        res.json(result)
    }
    else {
        res.json({ msg: "el producto ya existe" })
    }

}

const updateProduct = async (req, res) => {
    const { productId } = req.params
    const result = await Product.findByIdAndUpdate(productId, req.body, { new: true })
    if (!result) {
        res.status(404).json({ msg: "producto no encontrado" })
    }
    res.json(result)
}
const deleteProduct = async (req, res) => {
    const { productId } = req.params
    const result = await Product.findByIdAndDelete(productId)
    //const result = await Product.deleteOne({ _id: productId })
    res.json(result)
}

module.exports = { getAllProducts, getProductId, getPrice, insertProduct, updateProduct, deleteProduct }

/*
$eq: Selecciona los documentos donde un campo es igual a un valor. A menudo se puede omitir y poner solo el valor.
$ne: Selecciona los documentos donde un campo no es igual a un valor especificado.
$gt: Selecciona los documentos donde un campo es mayor que un valor dado.
$gte: Selecciona los documentos donde un campo es mayor o igual que un valor dado.
$lt: Selecciona los documentos donde un campo es menor que un valor dado.
$lte: Selecciona los documentos donde un campo es menor o igual que un valor dado
*/