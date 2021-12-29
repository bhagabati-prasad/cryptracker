const { Router } = require('express');
const router = Router();
const { userController } = require('../controllers');
const auth = require('../middleware/auth');

// @route  GET: /api/user/isLoggedIn
router.get('/isLoggedIn', auth, userController.isLoggedIn);

// @route  POST: /api/user/signup
router.post('/signup', userController.signup);

// @route  POST: /api/user/login
router.post('/login', userController.login);

// @route  GET: /api/user/logout
router.get('/logout', userController.logout);

// @route  GET: /api/user/favourite
router.get('/favourite/:coin_id', auth, userController.favourite);

module.exports = router;
