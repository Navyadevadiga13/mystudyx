const express = require('express');
const router = express.Router();
const userController = require('../controllers/studentController');
const studentMiddleware=require('../middleware/studentMiddleware');
router.post('/google-login', userController.googleLogin);
router.post('/google-complete-signup', userController.googleCompleteSignup);
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/get_profile', studentMiddleware,userController.get_profile);
router.put('/edit_profile', studentMiddleware,userController.edit_profile);
router.post('/addToWishlist', studentMiddleware,userController.addToWishlist);
router.get('/displayWishlist', studentMiddleware,userController.displayWishlist);
router.post('/removeWishlist', studentMiddleware,userController.removeWishlist);


module.exports = router;
