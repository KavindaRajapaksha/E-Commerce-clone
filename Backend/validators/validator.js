
const { check, validationResult } = require("express-validator");

exports.validator = (req, res, next) => {
  check("firstName").notEmpty().withMessage("firstName is required");
  check("lastName").notEmpty().withMessage("lastName is required");
  check("userName").notEmpty().withMessage("userName is required");
  check("email").isEmail().withMessage("Valid email is required");
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long");

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    next();
  };
  