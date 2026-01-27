const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
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
    },
    status: {
       type: String, 
    },
    dueDate: {
        type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);