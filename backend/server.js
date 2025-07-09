const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const routes = require("./routes");
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
