const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// In-memory log storage
const logs = [];

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST /logs: ingest a log
app.post("/logs", (req, res) => {
  const { timestamp, level, message } = req.body;

  if (!timestamp || !level || !message) {
    return res.status(400).json({ error: "Missing required log fields" });
  }

  const log = { timestamp, level, message };
  logs.push(log);

  res.status(201).json({ message: "Log ingested successfully", log });
});

// GET /logs: get all logs, with optional filtering
app.get("/logs", (req, res) => {
  const { level, search } = req.query;

  let filtered = logs;

  if (level) {
    filtered = filtered.filter((log) => log.level === level);
  }

  if (search) {
    filtered = filtered.filter((log) => log.message.includes(search));
  }

  res.json(filtered);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
