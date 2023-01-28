const { Router } = require('express');
const { protect } = require("../controllers/auth");

const router = Router();
const userController = require('../controllers/user');

router.route('/api/v1/user').all(protect).post(userController.createUser);
router.route('/api/v1/user').all(protect).get(userController.listUser);
router.route('/api/v1/user/:id').all(protect).delete(userController.deleteUser);
router.route('/api/v1/user/:id').all(protect).put(userController.updateUser);
router.route('/api/v1/user/:id').all(protect).get(userController.readUser);

module.exports = router.all(protect);