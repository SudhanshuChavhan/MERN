const express = require('express')
const {
  createUser, 
  getUsers,
  updateUser
} = require('../controllers/userController.js')

const router = express.Router()

//GET all users
router.get('/all', getUsers)

//POST a single user
router.post('/create', createUser)

//PATCH update a user
router.patch('/update/:id', updateUser)

module.exports = router