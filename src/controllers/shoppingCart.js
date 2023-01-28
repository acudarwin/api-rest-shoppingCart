const shoppingCartModel = require('../models/shoppingCart');

const createShoppingCart = async(req, res) => {
    try {
        let shoppingCart="";
        const findShoppingCart = await shoppingCartModel.findOne({status: "PENDING", user: req.body.user});
        if (findShoppingCart) {
            //Product already exists
            let productsExists = findShoppingCart.products;
            let productsNew = req.body.products
            let products = productsExists.concat(productsNew);
            findShoppingCart.products = products;
            await findShoppingCart.update(findShoppingCart);
            const shoppingCart = await shoppingCartModel.findById(findShoppingCart.id);

            return res.status(200).send({
                message: 'product agregado al carrito',
                shoppingCart: shoppingCart
            });

        } else {
            shoppingCart = await shoppingCartModel.create(req.body);
        }
        return res.status(200).send(shoppingCart);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
};

const deleteShoppingCart = async(req, res) => {
    try {
        let shoppingCart="";
        const findShoppingCart = await shoppingCartModel.findOne({status: "PENDING"});
        if (findShoppingCart) {
            //Product already exists
            let productsExists = findShoppingCart.products;
            const index = productsExists.findIndex( product => JSON.parse(JSON.stringify(product.productId)) == req.params.id) ;
            if (index > -1) {
                productsExists.splice(index, 1);
                findShoppingCart.products = productsExists;
                await findShoppingCart.update(findShoppingCart);
                shoppingCart = await shoppingCartModel.findById(findShoppingCart.id);
                return res.status(200).send({
                    message: 'product eliminado del carrito',
                    shoppingCart: shoppingCart
                });
            } else {
                return res.status(400).send({
                    message: 'Product not exists in shopping cart for delete'
                });
            }
        }
        
        return res.status(400).send({
            message: 'Shopping cart not found stading PENDING for delete product'
        });
        

    } catch (error) {
        return res.status(400).send({
            message: 'Shopping cart not found'
        });
    }
}

const payShoppingCart = async(req, res) => {
    try {
        let shoppingCart="";
        const findShoppingCart = await shoppingCartModel.findOne({status: "PENDING"});
        if (findShoppingCart) {
            //Products
            let productsExists = findShoppingCart.products;
            if (productsExists.length > 0) {
                findShoppingCart.status = "PAID";
                await findShoppingCart.update(findShoppingCart);
                shoppingCart = await shoppingCartModel.findById(findShoppingCart.id);
                return res.status(200).send({
                    message: 'Shopping cart paid',
                    shoppingCart: shoppingCart
                });
            }
            return res.status(400).send({ message: 'Shopping cart not have products' });
        }
        return res.status(400).send({ message: 'Shopping cart not found' });
    } catch (error) {
        return res.status(400).send({
            message: 'Shopping cart not found'
        });
    }
}

module.exports = {
    createShoppingCart,
    deleteShoppingCart,
    payShoppingCart,
}