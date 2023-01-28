const { Router } = require('express');
const { protect } = require("../controllers/auth");

const router = Router();
const productController = require('../controllers/product');

router.route('/api/v1/product').all(protect).post(productController.createProduct);
router.route('/api/v1/product').all(protect).get(productController.listProduct);
router.route('/api/v1/product/:id').all(protect).delete(productController.deleteProduct);
router.route('/api/v1/product/:id').all(protect).put(productController.updateProduct);
router.route('/api/v1/product/:id').all(protect).get(productController.readProduct);

module.exports = router;