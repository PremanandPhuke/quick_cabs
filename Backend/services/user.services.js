const userModel= require('../models/user.model');


// here we are creating a function for creating user
module.exports.createUser= async ({
    firstname, lastname, email, password
})=>{
    if( !firstname || !email || !password){
        throw new Error('All fields are required');
    }

    // here we are sending the new fileds to create a new User
    const user= userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}