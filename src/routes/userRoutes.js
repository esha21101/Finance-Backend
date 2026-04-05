const express = require("express");
const router = express.Router();

const { createUser, getUsers } = require("../services/userService");
const { authorizeRole } = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  const users = getUsers();
  res.json(users);
});

// ONLY ADMIN CAN CREATE USER
router.post("/", authorizeRole(["ADMIN"]), (req, res) => {
  try {
    const user = createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;