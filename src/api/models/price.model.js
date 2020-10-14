const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  key: {
    type: String,
    unique: true,
  },
  value: {
    type: String,
  },
});

module.exports = mongoose.model("Price", priceSchema);
