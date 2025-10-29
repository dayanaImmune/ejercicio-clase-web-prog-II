const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: { type: String, require: true },
    price: { type: Number },
    available: { type: Boolean },
    description: { type: String },
    stock: { type: Number },
    // si quisieramos saber quien fue el usuario que creo el producto
    user: { type: Schema.Types.ObjectId, ref: "user" }

}, {
    collection: "product",
    timestamps: true,
    versionKey: false
})

const Product = model("product", productSchema)
module.exports = Product