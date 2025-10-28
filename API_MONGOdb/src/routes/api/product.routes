const { getAllProducts, getProductId, getPrice, insertProduct, updateProduct, deleteProduct } = require("../../controllers/products.controllers")

const router = require("express").Router()


router.get("/", getAllProducts)
router.get("/product/:id", getProductId) // url params

//http://localhost:5000/api/product/price?min=10&max=20
router.get("/price", getPrice) //url params
router.post("/add", insertProduct)
router.put("/edit/:productId", updateProduct)
router.delete("/delete/:productId", deleteProduct)
module.exports = router