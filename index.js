const express = require('express');
const usersRoute = require('./routes/usersRoute');
const app = express()
const cors = require('cors')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/', usersRoute)

app.listen(3000, function (){
    console.log("port runing start 3000")
})