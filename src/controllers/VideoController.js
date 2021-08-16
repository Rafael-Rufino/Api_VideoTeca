const { res, req } = require("express");
const Video = require("../models/Videos");

module.exports = {
  async index(req, res) {
    try {
      const videos = await Video.find();
      return res.status(200).json({ videos });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
