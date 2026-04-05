const express = require("express");
const router = express.Router();

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require("../services/recordService");

const { authorizeRole } = require("../middleware/authMiddleware");

// CREATE
router.post("/", authorizeRole(["ADMIN"]), (req, res) => {
  try {
    const record = createRecord(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET + FILTER
router.get("/", (req, res) => {
  let records = getRecords();
  const { type, category } = req.query;

  if (type) {
    records = records.filter(r => r.type === type);
  }

  if (category) {
    records = records.filter(r => r.category === category);
  }

  res.json(records);
});

// UPDATE
router.put("/:id", authorizeRole(["ADMIN"]), (req, res) => {
  try {
    const record = updateRecord(req.params.id, req.body);
    res.json(record);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// DELETE
router.delete("/:id", authorizeRole(["ADMIN"]), (req, res) => {
  try {
    deleteRecord(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

module.exports = router;