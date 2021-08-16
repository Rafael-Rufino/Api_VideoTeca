const express = require("express");
const routes = require("./routes");
const connectToDatabase = require("./database");
require("dotenv").config();

connectToDatabase();

const app = express();

const port = 3000;
app.use(routes);

app.listen(port, () => {
  console.log(`Back started at http://localhost:${port}`);
});
