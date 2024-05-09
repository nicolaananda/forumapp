const express = require("express");
const threadRouter = express();
const jwt = require("jsonwebtoken");
const Session = require("../models/sessionModel");
const Thread = require("../models/threadModel");

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
  const { title, content, userId } = req.body;

  const sessionID = req.cookies.session_id;
  const user = await Session.findById(sessionID);

  // const newThread = new Thread({
  //   title,
  //   content,
  //   userId: session.userId,
  // });

  // const saveThread = await newThread.save();

  return res.send("Kamu di thread");
});

module.exports = threadRouter;
