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
    createdBy :{
      type: String,
      required: true, 
      createdBy: "user"
    },
    status: {
       type: String, 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("project", projectSchema);