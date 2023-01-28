const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true},
    inventory: { type: Number, required: true},
    unit: { type: String, required: true},
});

module.exports = model('Product', schema);