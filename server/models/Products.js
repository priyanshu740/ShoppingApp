import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: false },
    categories: { type: Array },
    price: { type: Number, required: true }
},
      { timestamps: true }
)

const productsModel = mongoose.model("productsModel",productsSchema)
export default productsModel

