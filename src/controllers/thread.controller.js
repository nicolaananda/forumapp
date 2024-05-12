const Thread = require("../models/threadModel");
const Session = require("../models/sessionModel");

async function createThread(req, res) {
  const { title, content } = req.body;

  const sessionID = req.cookies.session_id;
  if (!sessionID) {
    return res.status(401).json({ message: "No session found, please login." });
  }

  const session = await Session.findById(sessionID);
  if (!session) {
    return res.status(404).json({ message: "Session not valid or expired." });
  }

  const newThread = new Thread({
    title,
    content,
    author: session.userId,
  });

  const savedThread = await newThread.save();
  return res
    .status(201)
    .json({ message: "Thread created successfully", thread: savedThread });
}

async function getAllThreads(req, res) {
  const threads = await Thread.find().populate("author", "name email");
  res.status(200).json(threads);
}

async function getThreadById(req, res) {
  const { id } = req.params;

  try {
    const thread = await Thread.findById(id).populate("author", "name email");
    if (!thread) {
      return res.status(404).json({ message: "Thread not found" });
    }

    res.status(200).json(thread);
  } catch (error) {
    res.status(500).json({ message: "Thread not found" });
  }
}

// async function updateThread(req, res) {
//   try {
//     const { title, content } = req.body;
//     const thread = await Thread.findByIdAndUpdate(
//       req.params.id,
//       { title, content, updatedAt: new Date() },
//       { new: true }
//     );
//     if (!thread) {
//       return res.status(404).json({ message: "Thread not found" });
//     }
//     res
//       .status(200)
//       .json({ message: "Thread updated successfully", data: thread });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error updating thread", error: error.message });
//   }
// }

async function deleteThread(req, res) {
  const { id } = req.params;

  const sessionID = req.cookies.session_id;
  if (!sessionID) {
    return res.status(401).json({ message: "Login dulu kak" });
  }

  const session = await Session.findById(sessionID);
  if (!session) {
    return res.status(404).json({ message: "Login dulu kak" });
  }

  const thread = await Thread.findById(id);
  if (!thread) {
    return res.status(404).json({ message: "Thread tidak ditemukan" });
  }

  /// cek apakah yang mau mendelete thread sama dengan yang buat
  if (thread.author.toString() !== session.userId.toString()) {
    return res.status(403).json({
      message: "Ini bukan thread kamu, kenapa jail banget menghapus :D",
    });
  }

  await Thread.findByIdAndDelete(id);
  res.status(200).json({ message: "Threadmu berhasil didelete" });
}

module.exports = {
  createThread,
  getAllThreads,
  getThreadById,
  deleteThread,
};
