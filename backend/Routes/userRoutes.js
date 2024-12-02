const express=require('express');
const UserController = require('../Controllers/userController');
const Router=express.Router();


Router.get('/getuser',UserController.getUserById);

module.exports=Router;