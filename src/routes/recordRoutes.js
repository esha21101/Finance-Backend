const express = require("express");
const router = express.Router();

const { createRecord, getRecords } = require("../services/recordService");
const { authorizeRole } = require("../middleware/authMiddleware");

// Only ADMIN can create records
router.post("/", authorizeRole(["ADMIN"]), (req, res) => {
  try {
    const record = createRecord(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Everyone can view records
router.get("/", (req, res) => {
  const records = getRecords();
  res.json(records);
});

module.exports = router;