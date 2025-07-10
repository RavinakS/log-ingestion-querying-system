const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "logData.json");

const getLogs = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const logs = JSON.parse(data);
    return logs;
  } catch (err) {
    console.log(err);
  }
};

const addNewLog = async (newLog) => {
  try {
    const logs = await getLogs();
    logs.push(newLog);
    await writeLogs(logs);
  } catch (err) {
    console.log(err);
  }
};

const writeLogs = async (logs) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(logs, null, 2), "utf-8");
    console.log("Logs saved successfully.");
  } catch (err) {
    console.error("Error writing logs:", err);
  }
};

module.exports = { addNewLog, getLogs };
