const express = require("express");
const router = express.Router();

const { getRecords } = require("../services/recordService");

router.get("/summary", (req, res) => {
  const records = getRecords();

  let income = 0;
  let expense = 0;

  records.forEach((r) => {
    if (r.type === "INCOME") income += r.amount;
    else expense += r.amount;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
  });
});

module.exports = router;