const { Router } = require('express');

const router = Router();
const shoppingCartController = require('../controllers/shoppingCart');

router.route('/api/v1/cart/product').post(shoppingCartController.createShoppingCart);
router.route('/api/v1/cart/product/:id').delete(shoppingCartController.deleteShoppingCart);
router.route('/api/v1/cart/pay').post(shoppingCartController.payShoppingCart);

module.exports = router;