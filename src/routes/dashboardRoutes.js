const express = require("express");
const router = express.Router();

const { getRecords } = require("../services/recordService");

router.get("/summary", (req, res) => {
  const records = getRecords();

  let income = 0;
  let expense = 0;
  let categoryTotals = {};

  records.forEach(r => {
    if (r.type === "INCOME") income += r.amount;
    else expense += r.amount;

    if (!categoryTotals[r.category]) {
      categoryTotals[r.category] = 0;
    }
    categoryTotals[r.category] += r.amount;
  });

  const recent = records.slice(-5);

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
    categoryTotals,
    recentActivity: recent
  });
});

module.exports = router;