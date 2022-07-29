const User = require('../models/userModel.js')
const mongoose = require('mongoose')

//get all users
const getUsers = async(req, res)=>{
  const users = await User.find({})

  res.status(200).json(users)
}


//update a record
const updateUser = async (req, res) =>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No such user'})
  }

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if(!user){
    res.status(400).json({error:'No Such User'})
  }

  res.status(200).json(user)
}


//create a user
const createUser = async(req, res) =>{
  const {Last_Name, First_Name, Email, Phone_Number, Roles, State} = req.body
  
  try{
      const user = await User.create({Last_Name, First_Name, Email, Phone_Number, Roles, State})
      res.status(200).json(user)
  } catch(error){
      res.status(400).json({error: error.message})
  }
}

module.exports = {
  getUsers,
  updateUser,
  createUser
}