const asyncHandler = require("express-async-handler");
const User = require("../models/User.js");

const registerUser = asyncHandler(async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({
        message: "User Already Registered",
      });
    }

    const { firstName, lastName, userName, email, password } = req.body;
    const _user = new User({
      firstName,
      lastName,
      userName,
      email,
      password,
      username: Math.random().toString(),
    });

    const savedUser = await _user.save();

    return res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
    });
  }
});

module.exports = { registerUser };
