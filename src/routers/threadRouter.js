const express = require("express");
const threadRouter = express();
const jwt = require("jsonwebtoken");
const Session = require("../models/sessionModel");

// threadRouter.get("/thread", (req, res) => {
//   const token = req.cookies.token;

//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(payload);
//     res.send("Hello Thread");
//   } catch (error) {
//     res.status(401).send("Login dulu mas");
//   }
// });

threadRouter.get("/threads", async (req, res) => {
  return res.send("Kamu di thread");
});
module.exports = threadRouter;
