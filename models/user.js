const mongoose = require("mongoose");

const {Schema} = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        require: true
    },
    phoneNumber:{
        type: String,
    },
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    verified:{
        type: String,
        default: false
    },
    merchant:{
        type: Schema.Types.ObjectId,
        ref: "Merchant",
        default: null
    },
    googleId:{
        type: String
    },
    facebookId:{
        type: String
    },
    avater:{
        type: String
    },
    role:{
        type: String,
        default: "member",
        enum: ["admin", "member", "merchant"]
    },
    resetPasswordToken:{
        type: String,
        default: "member",
        enum: ["admin", "member", "merchant"]
    },
    resetPasswordExpires:{
        type: Date
    },
    updated:{
        type: Date
    },
    created:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("User", userSchema);