const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/User");
const secret = process.env.Secret_Code;

// Register
const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(204).json({ message: "Please all input fulfilled" });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 15);

    // Create a new user
    const user = new User({ email, password: hashedPassword, name });
    const data = await user.save();

    const token = jwt.sign({ userId: user._id }, secret, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "User registered successfully",
      data: {
        email: data?.email,
        name: data?.name,
        token,
        _id: data?._id,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Some Thing wrong",
    });
  }
};

// Login
const login = async (req, res) => {
  console.log(" login data ", req.body);
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(204)
        .json({ message: "Please fulfill User or password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign({ userId: user._id }, secret, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "User Login successfully",
      data: {
        email: user?.email,
        name: user?.name,
        token,
        _id: user?._id,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
