const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  Last_Name:{
    type:String,
    required:true
  },
  First_Name:{
    type:String,
    required:true
  },
  Email:{
    type:String,
    required:true
  },
  Phone_Number:{
    type:Number,
    required:true
  },
  Roles:{
    type:String,
    required: true
  },
  State:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model('User', userSchema)