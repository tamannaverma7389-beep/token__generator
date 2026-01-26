const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    projectId: {
       type: String,
      required: true, 
    },
    assignedTo : {
        type: String,
      required: true, 
      assignedTo: "user" 
    },
    status: {
       type: String, 
    },
    duedate: {
        type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", taskSchema);