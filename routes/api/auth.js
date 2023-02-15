const express = require("express");
const _ = express.Router()


_.get('/register', (req, res)=> {
    res.send('ami api route')
})

module.exports = _;