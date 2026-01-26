const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    taskId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    message:{
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);