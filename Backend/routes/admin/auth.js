const express=require('express');
let User=require('../../models/User.js');
const router=express.Router();
const {registerAdmin,signIn}=require('../../controller/admin/auth.js');
const {check}=require('express-validator');

router.post('/admin/signIn',[

    check("email").isEmail().withMessage("Valid Email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],signIn);
router.post('/admin/signUp',[
    check("firstName").notEmpty().withMessage("First Name is required"),
    check("lastName").notEmpty().withMessage("Last Name is required"),
    check("email").isEmail().withMessage("Valid Email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ], registerAdmin);

module.exports = router;
