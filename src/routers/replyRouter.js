const express = require("express");
const replyRouter = express();

// mongoose.connect(
//     "mongodb+srv://nicolaananda:XX8RCF6WGBCA0Qgk@cluster0.wmwkpiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// );
replyRouter.get("/reply", (req, res) => res.send("Hello replyRouter !!!!"));
module.exports = replyRouter;
