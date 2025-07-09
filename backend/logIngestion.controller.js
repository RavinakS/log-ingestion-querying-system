const { addNewLog, getLogs } = require("./logIngestion.model");
const { checkRequiredFields } = require("./utils");

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
    const { timestamp, search } = req.query;

    let filtered = logs;

    if (level) {
      filtered = filtered.filter((log) => log.level === level);
    }

    if (search) {
      filtered = filtered.filter((log) => log.message.includes(search));
    }

    res.json(filtered);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addLogIngestion, getLogIngestions };
