import { userData } from "../models/user.js";
import {
  comparePassword,
  hashPassword,
  setCookies,
} from "../helpers/userAuth.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./config.env",
});

export const signin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({ error: "Enter your name" });
    }
    if (!email) {
      return res.json({ error: "Enter your email" });
    }
    if (!password) {
      return res.json({ error: "Enter your password" });
    }
    const exist = await userData.findOne({ email });
    if (exist) {
      return res.json({ error: "user alredy exist!" });
    }
    // const hashedpassword = await bcrypt.hash(password, 10);
    const hashedpassword = await hashPassword(password);
    const user = await userData.create({
      name,
      email,
      password: hashedpassword,
    });
    res.json({ success: true, message: "Registered Successfully." });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ error: "enter email or password" });
    }
    const user = await userData.findOne({ email }).select("+password");
    if (!user) {
      return res.json({ error: "no user found!" });
    }
    const checkPassword = await comparePassword(password, user.password);
    if (!checkPassword) {
      return res.json({ error: "password is incorrect", success: false });
    }
    setCookies(res, user, 201, `Login Successfully. Welcome ${user.name}`);
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async (req, res) => {
  try {
    //const {password} = req.body;
    const { email, password, verifiedPassword } = req.body;
    if (!email || !password || !verifiedPassword) {
      res.json({ error: "enter email or password" });
    }
    if (password != verifiedPassword) {
      res.json({ error: "password is wrong" });
    }
    const user = await userData.findOne({ email });
    if (!user) {
      res.json({ error: "no user found!" });
    }
    //const hashedpassword = await hashPassword(password);
    const updatingUser = await userData.findOneAndUpdate(
      { email },
      { $set: req.body },
      { new: true }
    );
    res.json({ message: "user updated successfully", updatingUser });
  } catch (error) {
    console.log(error);
  }
};

export const getMyProfile = (req, res) => {
  res.status(200).json({
    message: "My Profile",
    user: req.user,
  });
};

export const logout = (req, res) => {
  try {
    res
      .status(200)
      .clearCookie("token")
      .json({ message: "Logout successfully" });
  } catch (error) {
    res.json({ error: "Logout failed" });
    console.log(error);
  }
};
