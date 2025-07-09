const Router = require("express").Router();
const { addLog, getLogs } = require("./logIngestion.controller");

Router.post("/add-log", addLog);
Router.get("/get-logs", getLogs);

module.exports = Router;
