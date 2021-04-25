import express from 'express';
import Order from '../models/orderModel';
import Product from '../models/productModel';
import { isAuth } from '../util'

const router = express.Router();

router.get("/mine", isAuth, async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  });

router.get("/", isAuth, async (req, res) => {
    const orders = await Order.find({}).populate('user');
    res.send(orders);
});

router.get("/:id", isAuth, async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id });
    if(order) {
        res.send(order);
    }
    else {
        res.status(404).send("Order not found.");
    }
});

router.post("/", isAuth, async (req, res) => {
    const newOrder = new Order({
        user: req.user._id,
        orderItems: req.body.orderItems,
        shipping: req.body.shipping,
        payment: req.body.payment,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice
    });
    const newOrderCreated = await newOrder.save();
    if (newOrderCreated) {
        res.status(201).send({ message: "New Order Created.", data: newOrderCreated });
    }
    else {
        res.status(400).send({ message: "New Order not created." });
    }
});

router.put("/:id/pay", isAuth, async (req, res) => {
    const reqOrder = req.body;
    const reqOrderitems = reqOrder.orderItems;

    reqOrderitems.forEach(async (item) => {
      var product = await Product.findById(item.product);
      product.countInStock = product.countInStock - item.qty;
      await product.save();
    });

    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.payment = {
        paymentMethod: 'PayPal',
      }
      const updatedOrder = await order.save();
      res.send({ message: 'Order Paid.', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order not found.' })
    }
});

export default router;