import express from "express";
const router = express.Router();
import { signin, updatePassword } from "../controller/user.js";
import { login, logout, getMyProfile } from "../controller/user.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { isAuthenticated } from "../helpers/userAuth.js";
dotenv.config({
  path: "./config.env",
});

router.use(cors({
  methods: ["GET", "POST"],
  origin: process.env.FRONTEND_URI,
  credentials: true,
}));
router.use(cookieParser());

router.post("/register", signin);
router.post("/login", login);
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", logout);
router.put("/updatepassword", updatePassword);

export default router;
