const asyncHandler = require("express-async-handler");
const User = require("../../models/User.js");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const registerAdmin = asyncHandler(async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({
        message: "Admin Already Registered",
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
      role: "admin",
    });

    const savedUser = await _user.save();

    return res.status(201).json({
      message: "Admin created successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Something went wrong",
    });
  }
});

const signIn = asyncHandler(async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = await User.findOne({ email: req.body.email }).exec();

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.authenticate(req.body.password)&& user.role==="admin") {
      const token = jwt.sign(
        { _id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      const { _id, firstName, lastName, email, role, fullName } = user;
      res.status(200).json({
        token,
        user: {
          _id,
          firstName,
          lastName,
          email,
          role,
          fullName,
        },
      });
    } else {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
requireSignIn = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);

  req.user = user;
  next();
};

module.exports = { registerAdmin, signIn ,requireSignIn};
