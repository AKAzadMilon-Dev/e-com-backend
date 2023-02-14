const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World achi')
})

app.listen(3000, function (){
    console.log("port runing start 3000")
})