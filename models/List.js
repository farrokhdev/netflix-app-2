const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      // unique: true,
      default: "",
    },
    type: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    content: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);
