const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    member: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref : "user",
    },
    projectId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);