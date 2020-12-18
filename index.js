const express = require('express')
const mongoose = require('mongoose') 

const app = express()

//Middleware

app.use(express.json())
app.set('view engine','ejs')

//Database Connection

const db = 'mongodb://localhost/url-shortner'

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>console.log('Database Connected'))
.catch(err=>console.log("Not connected"))

app.use('/',require('./routes/url'))

app.listen(3000,()=>console.log("listening post 3000"));