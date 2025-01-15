const userModel= require('../models/user.model');
const userService = require('../services/user.services');
const { validationResult } = require('express-validator')

module.exports.registerUser= async (req, res, next)=>{

    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { fullname, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });


}

module.exports.loginUser= async (req, res, next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');
    //this .select('+password') is used to select the password field as we have set it to false in the 
    // schema and it will not be selected by default

    if(!user){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    // this is the function which we have created in the user.model.js file for comparing the password
    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message: 'Invalid email or password'});
    }


    // here we are generating the token for the user and sending it to the user as well as the user details
    const token = user.generateAuthToken();
    res.status(200).json({ token, user });

}