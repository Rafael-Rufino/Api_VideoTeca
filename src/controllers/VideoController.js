const { response } = require("express");
const { v4: uuid } = require("uuid");
const Video = require("../models/Video");

module.exports = {
  async index(req, res) {
    try {
      const videos = await Video.find();
      return res.status(200).json({ videos });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async store(req, res) {
    const { title, link } = req.body;

    if (!title || !link) {
      return res.status(400).json({
        error: "Missing title or link.",
      });
    }

    const video = new Video({
      _id: uuid(),
      title,
      link,
      liked: false,
    });
    try {
      await video.save();

      return res.status(201).json({ message: "Video create with sucesfully!" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(request, response) {
    const { title, link } = request.body;

    if (!title && !link) {
      return response
        .status(400)
        .json({ error: "You must inform a new title or a new link" });
    }
    if (title) response.video.title = title;
    if (link) response.video.link = link;

    try {
      await response.video.save();
      return response
        .status(200)
        .json({ message: "Video upload successfully!" });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  },

  async delete(request, response) {
    try {
      await response.video.remove();
      return response
        .status(200)
        .json({ message: "Video delete successfully!" });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  },

  async updateLike(request, response) {
    response.video.liked = !response.video.liked;

    try {
      await response.video.save();
      return response.status(200).json({
        message: `Video ${
          response.video.liked ? "liked" : "unliked"
        } successfully`,
      });
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },
};
