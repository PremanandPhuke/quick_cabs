const userModels = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

//here we are creatting a function for authenticating the user by using the token 
module.exports.authUser= async (req, res, next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    // here we are checking the token is present or not and if it is present then we are splitting it and taking the second part of it

    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }

    const isBlacklisted = await blackListTokenModel.findOne({token : token});
    // here we are checking that the token is blacklisted or not

    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'});
    }

    try{
        //here we are verifying the token and getting the user by using the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModels.findById(decoded._id);

        //This decoded data is the data which we have passed while creating the token 
        //means we have passed the _id of the user while creating the token
        // then we are finding the user by using that _id

        req.user = user;
        return next();

    }catch(err){
        return res.status(401).json({message: 'Unauthorized'});
    }
}

//here we are creating a function for authenticating the captain by using the token
// module.exports.authCaptain= async (req, res, next)=>{
//     const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
//     // here we are checking the token is present or not and if it is present then we are splitting it and taking the second part of it
//     console.log(token);

//     if(!token){
//         return res.status(401).json({message: 'Unauthorized'});
//     }

//     const isBlacklisted =  await blackListTokenModel.findOne({token : token});

//     if(isBlacklisted){
//         return res.status(401).json({message: 'Unauthorized'});
//     }

//     try{
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const captain= await captainModel.findById(decoded._id);

//         req.captain = captain;
//         return next();
//     }catch(err){
//      res.status(401).json({message: 'Unauthorized'});
//     }

// }

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    console.log(token);


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });



    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;

        return next()
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
}

