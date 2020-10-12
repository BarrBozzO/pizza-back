const mongoose = require("mongoose");

const ExchangeRateSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency",
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency",
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Rate", ExchangeRateSchema);
