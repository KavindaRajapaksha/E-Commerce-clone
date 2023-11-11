const express=require('express');
let User=require('../models/User.js');
const router=express.Router();
const {registerUser}=require('../controller/user.js');

router.post('/signIn',(req,res)=>{

});


router.post('/signUp', registerUser);

module.exports = router;
