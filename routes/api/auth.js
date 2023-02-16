const express = require("express");
const _ = express.Router()


_.post('/register', (req, res)=> {
    const {email, fullname} = req.body
    res.json({email, fullname})
})

module.exports = _;