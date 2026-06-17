const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  due: {
    type: String,
    required: true,
  },

  owner: {
    type: String,
    required: true,
  },

  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },

  status: {
    type: String,
    enum: ["Open", "In Progress", "Resolved"],
    default: "Open",
  },
});

module.exports = mongoose.model("Issue", issueSchema);