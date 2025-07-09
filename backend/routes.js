const Router = require("express").Router();
const {
  addLogIngestion,
  getLogIngestions,
} = require("./logIngestion.controller");

Router.post("/add-log-ingestion", addLogIngestion);
Router.get("/get-log-ingestion", getLogIngestions);

module.exports = Router;
