const addLogIngestion = async (req, res) => {
  try {
    const { level, message, resourceId, timestamp, traceId, commit, metadata } =
      req.body;

    if (
      !level ||
      !message ||
      !resourceId ||
      !timestamp ||
      !traceId ||
      !commit ||
      metadata
    ) {
      return res.status(400).json({ error: "Missing required log fields" });
    }

    const log = { timestamp, level, message };
    logs.push(log);

    res.status(201).json({ message: "Log ingested successfully", log });
  } catch (err) {
    console.log(err);
  }
};

const getLogIngestions = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addLogIngestion, getLogIngestions };
