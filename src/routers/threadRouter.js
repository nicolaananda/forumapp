const express = require("express");
const threadRouter = express();
const jwt = require("jsonwebtoken");
const Session = require("../models/sessionModel");
const Thread = require("../models/threadModel");
const threadController = require("../controllers/thread.controller");

threadRouter.post("/threads", threadController.createThread);

threadRouter.get("/threads", threadController.getAllThreads);

threadRouter.delete("/threads/:id", threadController.deleteThread);

threadRouter.get("/threads/:id", threadController.getThreadById);

module.exports = threadRouter;
