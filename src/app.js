const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const recordRoutes = require("./routes/recordRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/users", userRoutes);
app.use("/records", recordRoutes);
app.use("/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Finance Backend API 🚀",
    endpoints: {
      users: "/users",
      records: "/records",
      dashboard: "/dashboard/summary"
    }
  });
});

module.exports = app;