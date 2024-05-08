require("dotenv").config();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Session = require("../models/sessionModel");

async function handleLoginJWT(req, res) {
  const { email, password } = req.body;

  // find user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  // compare pass
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) res.status(403).json({ message: "Wrong password" });

  // payload token
  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
  };

  // generate token
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  // set token
  res.cookie("token", token).send("Login thread success");
}
async function handleLoginSession(req, res) {
  const { email, password } = req.body;

  // find user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  // compare pass
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) res.status(403).json({ message: "Salah password" });

  // insert db session
  const newSession = new Session({
    userId: user.id,
  });
  const session = await newSession.save();

  // send id
  res.cookie("session_id", session.id).send("Login thread success");
}

async function handleRegister(req, res) {
  const { name, email, password } = req.body;
  const hashedPassword = await bycrypt.hash(password, 12);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  const user = await newUser.save();
  res.status(201).json({ message: "User has been created", data: user });
}

module.exports = { handleLoginJWT, handleLoginSession, handleRegister };
