const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World achi')
})

app.listen(3000, function (){
    console.log("port runing start 3000")
})