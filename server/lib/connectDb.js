const mongoose = require("mongoose");

require("dotenv").config();

function connectDb() {
  const uri = process.env.MONGO_URI;

  mongoose.connect(uri, (err) => {
    if (err) console.log(err);
    console.log("connected");
  });
}

module.exports = { connectDb };
