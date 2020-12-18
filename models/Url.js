const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema

const urlSchema = new Schema({
    url:{
        type:String,
        required:true,
        unique:true

    },
    address:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports = URL = mongoose.model('url',urlSchema)