const { Schema, model } = require('mongoose');

const schema = new Schema({
    invoiceNumber: { type: String, required: true},
    status: { type: String, required: true},
    totalAmount: { type: Number, required: true},
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true }
        },
    ]
});

module.exports = model('ShoppingCart', schema);