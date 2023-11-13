const express=require('express');
let User=require('../models/User.js');
const router=express.Router();
const {registerUser,signIn,requireSignIn}=require('../controller/auth.js');

router.post('/signIn',signIn);
router.post('/signUp', registerUser);
router.post('/profile',requireSignIn,(req,res)=>{
    res.status(200).json({ user:'profile'})
});
module.exports = router;
