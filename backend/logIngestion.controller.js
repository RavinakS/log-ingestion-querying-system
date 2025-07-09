const { addNewLog, getLogs } = require("./logIngestion.model");

const addLogIngestion = async (req, res) => {
  try {
    const { level, message, resourceId, timestamp, traceId, commit, metadata } =
      req.body;

    const requiredFieldsExist = checkRequiredFields(req.body);

    if (!requiredFieldsExist) {
      return res.status(400).json({ error: "Missing required log fields" });
    }

    const log = {
      level,
      message,
      resourceId,
      timestamp,
      traceId,
      commit,
      metadata,
    };

    await addNewLog(log);
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

const checkRequiredFields = (log) => {
  let requiredFieldsExists = true;
  const { level, message, resourceId, timestamp, traceId, commit, metadata } =
    log;

  if (
    !level ||
    !message ||
    !resourceId ||
    !timestamp ||
    !traceId ||
    !commit ||
    metadata
  ) {
    requiredFieldsExists = false;
  }

  return requiredFieldsExists;
};

module.exports = { addLogIngestion, getLogIngestions };
