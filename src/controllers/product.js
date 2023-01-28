const productModel = require('../models/product');

const createProduct = async(req, res) => {
    try {
        const product = await productModel.create(req.body);
        return res.status(200).send(product);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
};

const listProduct = async(req, res) => {
    try {
        const products = await productModel.find();
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send(error);
    }
}

const deleteProduct = async(req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        await product.delete();
        return res.status(200).send({
            product,
            message: 'product deleted'
        });

    } catch (error) {
        return res.status(400).send({
            message: 'Product not found'
        });
    }
}

const updateProduct = async(req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        await product.update(req.body);
        const updatedProduct = await productModel.findById(product.id);

        return res.status(200).send({
            message: 'product updated',
            product: updatedProduct
        });
    } catch (error) {
        return res.status(400).send({
            message: 'product not found'
        });
    }
}

const readProduct = async(req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        return res.status(200).send(product);
    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = {
    createProduct,
    listProduct,
    deleteProduct,
    updateProduct,
    readProduct
}