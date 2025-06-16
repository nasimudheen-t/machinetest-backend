const mongoose = require('mongoose')

const mongodbstring = process.env.mongodbonnection

mongoose.connect(mongodbstring).then(res=>{
    console.log('mongodb connected');
    
}).catch(err=>{
    console.log('mongodb disconnected');
    
})