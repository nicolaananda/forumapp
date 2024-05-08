require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const middleware = require("./controllers/middleware.js");

// import routers
const authRouter = require("./routers/authRouter.js");
const replyRouter = require("./routers/replyRouter.js");
const threadRouter = require("./routers/threadRouter.js");
const MONGO_DB_URL = require("./config/dburl.config");

mongoose.connect(MONGO_DB_URL);
app.listen(8000);

// peralatan cookie
app.use(cookieParser());
app.use(express.json());

// app
app.use("/threads", middleware);

// router
app.use(authRouter);
app.use(replyRouter);
app.use(threadRouter);
