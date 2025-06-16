require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongodb = require('./mongodb/db.js')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.json())
const routers = require('./router/routes.js')

app.use(routers)

const PORT = process.env.PORT || 3000




app.listen(PORT,()=>{
    console.log(`server created ${PORT}`);
    
})


app.get('/',(req,res)=>{
    res.send('started server on 3000')
})

app.post('/',(req,res)=>{
    res.send(`POST REQUEST`)
})