import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userData } from "../models/user.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./config.env",
});

export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

export const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

export const setCookies = async (res, user, statusCode = 200, message) => {
  const token = await jwt.sign(
    { email: user.email, id: user._id },
    process.env.JWT_SECRET
  );
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: Date.now() + 15 * 60 * 1000,
    })
    .json({ message, success: true, user });
};

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(404).json({ message: "login first!", success: false });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await userData.findById(decoded.id);
  next();
};