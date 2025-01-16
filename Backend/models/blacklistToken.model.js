const mongoose = require("mongoose");
const { create } = require("./user.model");

// This schema is used to store the tokens that are blacklisted

// if you are logged in then you will be logged out automatically after 24 hrs
// if you logged in and then logged out, the token will be stored here for 24 hrs
// so that the token cannot be used again
// this is used to prevent the user from using the token again after logging out
// also if you are logged in and you change the password, the token will be blacklisted
// if you are logged in then you will be logged out from all the devices after changing the password

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hrs in seconds
  },
});

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);
