const { Schema, model } = require("mongoose");

const GoodsSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 128,
    index: true,
    trim: true,
  },
  description: {
    type: String,
    maxlength: 1024,
    trim: true,
  },
  price: {
    currency: {
      type: Schema.Types.ObjectId,
      ref: "Currency",
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
});

module.exports = model("Goods", GoodsSchema);
