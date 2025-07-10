const { addNewLog, getLogs } = require("./logIngestion.model");
const { checkRequiredFields } = require("./utils");

const addLog = async (req, res) => {
  try {
    const {
      level,
      message,
      resourceId,
      timestamp,
      traceId,
      commit,
      metadata,
      spanId,
    } = req.body;

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
      spanId,
    };

    await addNewLog(log);
    res.status(201).json({ message: "Log ingested successfully", log });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!!", err });
    console.log(err);
  }
};

const getLogData = async (req, res) => {
  try {
    const { search, level, startTime, endTime, date } = req.query;

    const logData = await getLogs();
    let filtered = logData;

    if (level) {
      filtered = filtered.filter((log) => log.level === level);
    }

    if (search) {
      filtered = filtered.filter((log) => log.message.includes(search));
    }

    if (startTime || date) {
      const start = new Date(startTime || date);
      filtered = filtered.filter((log) => new Date(log.timestamp) >= start);
    }

    if (endTime) {
      const end = new Date(endTime);
      filtered = filtered.filter((log) => new Date(log.timestamp) <= end);
    }

    res.status(201).json({ logs: filtered });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!!", err });
    console.log(err);
  }
};

module.exports = { addLog, getLogData };
