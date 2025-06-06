import mongoose from "mongoose";

//create Schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // shows the dates createdAt, updatedAt
});

//create Product Model
const Product = mongoose.model("Product", productSchema);

export default Product;