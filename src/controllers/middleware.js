const Session = require("../models/sessionModel");

async function middleware(req, res, next) {
  // check cookie
  const sessionID = req.cookies?.session_id;
  if (!sessionID) {
    return res.send("Silahkan Registrasi");
  }

  const session = await Session.findOne({ _id: sessionID });
  if (!session) {
    return res.send(
      "Halaman khusus User yang sudah melakukan registrasi!, Silahkan mendaftar terlebih dahulu."
    );
  }
  next();
}

module.exports = middleware;
