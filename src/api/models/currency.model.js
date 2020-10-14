const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
  iso: {
    type: String,
    maxlength: 3,
    index: true,
    trim: true,
  },
});

currencySchema.method({
  transform() {
    const transformed = {};
    const fields = ["id", "name", "iso"];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

module.exports = mongoose.model("Currency", currencySchema);
