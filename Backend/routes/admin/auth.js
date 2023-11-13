const express=require('express');
let User=require('../../models/User.js');
const router=express.Router();
const {registerUser,signIn}=require('../../controller/admin/auth.js');

router.post('/admin/signIn',signIn);
router.post('/admin/signUp', registerUser);

module.exports = router;
