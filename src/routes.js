const express = require("express");
const routes = express.Router();

const VideoController = require("./controllers/VideoController");

routes.get("/", function (req, res) {
  res.send("Hello word !");
});
routes.get("/videos", VideoController.index);

module.exports = routes;
