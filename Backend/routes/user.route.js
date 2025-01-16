const express= require('express');
const router = express.Router();
const {body}= require("express-validator");
const userController= require('../controllers/user.controller');
const authMiddleware= require('../middleware/auth.middleware');

// here we are settiing up the route as well as validating the data which we gonna receive from user by adding constraints in the body
router.post('/register',
    [
        body('email').isEmail().withMessage('Invalid Email'),
        body('fullname.firstname').isLength({min: 3}).withMessage('First Name must be atleast 3 characters long'),
        body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')
    ],

    userController.registerUser
)

// here we are creating a route for login and validating the data which we gonna receive from user by adding constraints in the body
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser
)

// here we are creating a route for getting the user profile
router.get('/profile', authMiddleware.authUser, userController.getUserProfile);

// here we are creating a route for logout
router.get('/logout', authMiddleware.authUser, userController.logoutUser);

module.exports= router;