const express = require("express");
const _ = express.Router()


_.post('/register', (req, res)=> {
    const {email, fullname, password, isSubscribe} = req.body

    if(!email){
        return res.json({error:"you must be enter your email!"})
    }

    if(!fullname){
        return res.json({error:"you must be enter your fullname"})
    }

    if(!password){
        return res.json({error:"you must be enter your password"})
    }
    
    res.json({email, fullname, password, isSubscribe})
})

module.exports = _;