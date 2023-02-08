const mongoose = require("mongoose");

const schema = mongoose.Schema({
  task_name: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const model = mongoose.model("task", schema);

module.exports = { Task: model };
