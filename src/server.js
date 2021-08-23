require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const connectToDatabase = require("./database");
//habilitando cors
const cors = require("cors");
connectToDatabase();

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
// port
//route
app.use(routes);

app.listen(port, () => {
  console.log(`Back started at http://localhost:${port}`);
});
