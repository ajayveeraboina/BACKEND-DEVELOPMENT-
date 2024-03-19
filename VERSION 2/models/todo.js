//creating schema with the help of mongoose in DB as mongoose can create it

const mongoose = require("mongoose");

//creating schema with the help of mongoose
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
    maxLength: 50,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});
//exported with the name Todo
module.exports = mongoose.model("Todo", todoSchema);
