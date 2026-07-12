const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  chat,
} = require("../controllers/chatController");

router.post(
  "/chat",
  authMiddleware,
  chat
);

module.exports = router;