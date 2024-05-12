const express = require("express");
const replyRouter = express();

replyRouter.get("/reply", (req, res) => res.send("Hello replyRouter !!!!"));
module.exports = replyRouter;
