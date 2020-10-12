const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    goods: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Goods",
          required: true,
        },
        count: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    address: {
      street: {
        type: String,
        trim: true,
        maxlength: 512,
        required: true,
      },
      flat: {
        type: String,
        trim: true,
        maxlength: 32,
        required: true,
      },
      floor: {
        type: Number,
        required: true,
      },
    },
    totalPrice: {
      currency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Currency",
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

OrderSchema.method({
  transform() {
    const transformed = {};
    const fields = ["id", "goods", "address", "user", "totalPrice"];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

module.exports = mongoose.model("Order", OrderSchema);
