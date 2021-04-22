import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [{
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: String, required: true },
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }
    }],

    shipping: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true }
    },

    payment: { 
        paymentMethod: { type: String, required: true }
    },
    itemsPrice: { type: Number },
    taxPrice: { type: Number },
    shippingPrice: { type: Number },
    totalPrice: { type: Number },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date }
}, {
    timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;