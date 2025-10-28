const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, default: "general", enum: ["general", "admin"] }
}, {
    collection: "user",
    timestamps: true,
    versionKey: false
})

const User = model("user", userSchema)
module.exports = User