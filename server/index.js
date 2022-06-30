import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import cartRoutes from './routes/cart.js'
import productsRoutes from './routes/products.js'


const app = express()
app.use(cors());
app.use(express.json());
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(() => console.log('db connected'))

app.use("/api/cart",cartRoutes)

app.use("/api/products",productsRoutes)


app.listen(process.env.PORT || 5000 , () => {
    console.log("Backend is running succesfully");
})