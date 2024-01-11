const Mongoose = require("mongoose");

const TODO = new Mongoose.Schema({
  _id: Number,
  status: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
});

module.exports = Mongoose.model("todo", TODO, "todos");
