const Router = require("express").Router();
const { addLog, getLogData } = require("./logIngestion.controller");

Router.post("/add-log", addLog);
Router.get("/get-logs", getLogData);

module.exports = Router;
