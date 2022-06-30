import express from 'express'
import productsModel from '../models/Products.js'

const router = express.Router()

//CREATE

router.post("/",async (req, res) => {
  const newProduct = new productsModel(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//'UPDATE'
router.put("/:id",async (req, res) => {
  try {
    const updatedProduct = await productsModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id",  async (req, res) => {
  try {
    await productsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await productsModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {

  try {
    let products;

   
    
      products = await productsModel.find();
    

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router