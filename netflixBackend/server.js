import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import { app } from "./app.js";
import router from "./router/user.js";
import { connectMongo } from "./data/dataBase.js";
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use(cookieParser());

connectMongo();

app.listen(process.env.PORT, () => {
  console.log("server is working");
});
