// This is the model for user

const mongoose= require('mongoose');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
// creating schema for the user means the structure of the user table in that database 
// or what are the things that user should enter while creating an account 

// in simple words schema can also be defined as structure of that entity
const userSchema= new mongoose.Schema({

    fullname:{
        firstname: {
            type:String,
            required:true,
            minlength: [3, 'First Name must be atleast 3 characters long']
        },
        lastname: {
            type:String,
            // required:true,
            minlength: [3, 'Last Name must be atleast 3 characters long']
        }
    },
    email: {
        type:String,
        required:true,
        unique: true,
        minlength: [5, 'Email Name must be atleast 5 characters long']
    },
    password: {
        type:String,
        required:true,
    },
    socketId: {
        //this is used while we have to share our captain's location with user 
        type:String,

    }
})

// method to geretae a token
userSchema.methods.generateAuthToken= function(){
    const token= jwt.sign({_id : this._id}, process.env.JWT_SECRET);
    return token;
}

// method for comparing the password
userSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password, this.password)
}

//This function will conver the user password into encrypted format 
// bcrypt has the method named as hash which takes two arguments 
// bcrypt.hash(password, <length of encrypted format> )
userSchema.statics.hashPassword= async function (password) {
    return await bcrypt.hash(password, 10);
}


// here we created a model for user with the userSchema by using mongoose methods with name 
// "userModel"
const userModel = mongoose.model('user', userSchema);

module.exports= userModel;