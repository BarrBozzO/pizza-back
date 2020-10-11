const httpStatus = require("http-status");
const Order = require("../models/order.model");
const Currency = require("../models/currency.model");

exports.get = async (req, res, next) => {
  try {
    const orders = await Order.find()
      .populate({
        path: "totalPrice.currency",
        select: "name",
      })
      .populate({
        path: "goods.id",
        model: "Goods",
        select: ["name", "description"],
      });
    return res.json({ orders });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const data = req.body;

    if (req.user) {
      data.user = req.user._id;
    }

    const USD = await Currency.findOne({
      iso: "USD",
    });

    if (!USD) {
      throw Error("Currency not found");
    }

    // TODO totalPrice
    data.totalPrice = {
      currency: USD._id,
      value: 20,
    };

    const order = new Order(data);
    const savedOrder = await order.save();

    res.status(httpStatus.CREATED);
    res.json(savedOrder);
  } catch (error) {
    next(error);
  }
};
