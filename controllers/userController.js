const asynHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc Get current user
//@route GET /api/users
//@access private

const getCurrentUsers = asynHandler(async (req, res) => {
  res.json("Current User");
});

//@desc Register user
//@route POST /api/users
//@access public

const registerUser = asynHandler(async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    res.status(400);
    throw new Error("All fields are required.");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already registered.");
  }
  //Hashed password
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });
  if (user) {
    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "User is not registered / valid." });
  }
});

//@desc Login user
//@route POST /api/users
//@access public

const loginUser = asynHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User is not registered.");
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = JWT.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      accessToken: accessToken,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or, password. Please try again.");
  }
});

module.exports = { registerUser, loginUser, getCurrentUsers };
