const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    video: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      // required: true,
    },
    releaseDate: {
      type: String,
    },
    director: {
      type: String,
      default: "",
    },
    music: {
      type: String,
    },
    cast: {
      type: String,
    },
    imdb: {
      type: String,
    },
    rotten: {
      type: String,
    },
    background: {
      type: String,
    },
    hover: {
      type: String,
    },
    title: {
      type: String,
      // required: true,
      // unique: true,
    },
    year: {
      type: String,
    },
    genre: {
      type: String,
      // required: true
    },
    duration: {
      type: String,
    },
    desc: {
      type: String,
    },
    limit: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
