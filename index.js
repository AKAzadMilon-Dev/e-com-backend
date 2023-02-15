require('dotenv').config()
const express = require('express');
const app = express()
const cors = require('cors')
const routes = require("./routes");

console.log(process.env.BASE_URL)
// middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(3000, function (){
    console.log("port runing start 3000")
})