const Session = require("../models/sessionModel");
async function middleware(req, res, next) {
  // check session
  const sessionID = req.cookies;
  //   if (!sessionID) {
  //     return res.send(
  //       "Halaman khusus User yang sudah melakukan registrasi!, Silahkan mendaftar terlebih dahulu."
  //     );
  //   }

  //   const session = await Session.findOne({ _id: sessionID });
  //   if (!session) {
  //     return res.send(
  //       "Halaman khusus User yang sudah melakukan registrasi!, Silahkan mendaftar terlebih dahulu."
  //     );
  //   }
  console.log(sessionID);
  next();
}

module.exports = middleware;
