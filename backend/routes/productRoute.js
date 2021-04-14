import express from 'express';
import Product from '../models/productModel';

const router = express.Router();

router.get("/createProduct", async (req, res) => {
    const product = new Product({
        name: 'OnePlus 9',
        image:'/images/op9.jpg',
        brand: 'OnePlus',
        price: 39999,
        category: 'Phones',
        count: 78,
        description: 'very good phone',
        rating: 4.5,
        numReviews: 456
    });
    const newProduct = await product.save();
    if (newProduct) {
        return res.status(201).send({ message: 'New Product created.', data: newProduct });
    }
    return res.status(500).send({ message: 'Error in Product creation.' });
})

router.get("/", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

export default router;