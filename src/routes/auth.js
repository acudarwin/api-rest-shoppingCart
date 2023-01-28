const { Router } = require('express');

const router = Router();
const authController = require('../controllers/auth');

router.post('/api/v1/auth/login', authController.login);
router.post('/api/v1/auth/register', authController.signup);

module.exports = router;