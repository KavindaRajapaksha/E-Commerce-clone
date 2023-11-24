const express = require("express");
let User = require("../models/User.js");
const { check } = require("express-validator");
const router = express.Router();
const {
  registerUser,
  signIn,
  requireSignIn,
} = require("../controller/auth.js");

router.post("/signIn",[

    check("email").isEmail().withMessage("Valid Email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ], signIn);
router.post(
  "/signUp",
  [
    check("firstName").notEmpty().withMessage("First Name is required"),
    check("lastName").notEmpty().withMessage("Last Name is required"),
    check("email").isEmail().withMessage("Valid Email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  registerUser
);
router.post("/profile", requireSignIn, (req, res) => {
  res.status(200).json({ user: "profile" });
});
module.exports = router;
