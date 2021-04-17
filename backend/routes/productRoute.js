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
        numReviews: 456,
        countInStock: 0
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

router.post("/", async (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        count: req.body.count,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
    });

    const newProduct = await product.save();

    if(newProduct){
        return res.status(201).send({message: 'New product created!', data: newProduct});
    }

    return res.status(500).send({message: 'Error while Creating Product!'});


})

router.get("/:id", async (req, res) => {
    const product = await Product.findOne({ _id : req.params.id });
    if (product) {
        res.send(product);
    }
    else {
        res.status(404).send({ message: 'Product not found.'})
    }
})

export default router;