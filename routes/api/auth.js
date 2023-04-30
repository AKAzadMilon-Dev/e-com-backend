const express = require("express");
const _ = express.Router();
const User = require("../../models/user.js");
var jwt = require('jsonwebtoken');

_.post('/register', (req, res)=> {
    const {email, firstName, lastName, phoneNumber, password} = req.body

    if(!email){
        return res.json({error:"you must be enter your email!"})
    }

    if(!firstName){
        return res.json({error:"you must be enter your firstname"})
    }

    if(!lastName){
        return res.json({error:"you must be enter your lastname"})
    }

    if(!phoneNumber){
        return res.json({error:"you must be enter your phonenumber"})
    }

    if(!password){
        return res.json({error:"you must be enter your password"})
    }

    const user = new User({
        email,
        firstName,
        lastName,
        phoneNumber,
        password
    })

    user.save();

    var token = jwt.sign({email: user.email}, "tQbCDTZ5V0", { expiresIn: '1h' });
    
    res.json(token)
})

module.exports = _;