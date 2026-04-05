const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve frontend (UI)
app.use(express.static(path.join(__dirname, "../public")));

// Routes
const userRoutes = require("./routes/userRoutes");
const recordRoutes = require("./routes/recordRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/users", userRoutes);
app.use("/records", recordRoutes);
app.use("/dashboard", dashboardRoutes);

module.exports = app;