const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  rollNo: String,
  dob: String,
  name: String,
  class: String,
  marks: {
    math: Number,
    science: Number,
    english: Number
  },
  total: Number,
  result: String
});

module.exports = mongoose.model("Result", ResultSchema);
