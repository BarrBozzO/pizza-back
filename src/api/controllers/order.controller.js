const httpStatus = require("http-status");
const Order = require("../models/order.model");
const Currency = require("../models/currency.model");
const Price = require("../models/price.model");
const Goods = require("../models/goods.model");

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

    const [goodsEntities, USD, DELIVERY_PRICE] = await Promise.all([
      Goods.find({
        _id: { $in: data.goods.map(({ id }) => id) },
      }),
      Currency.findOne({
        iso: "USD",
      }),
      Price.findOne({
        key: "delivery_price",
      }),
    ]);

    if (!goodsEntities.length) {
      throw new Error("Invalid goods provided!");
    }

    let totalPrice = 0;
    const goodsCountMap = data.goods.reduce((map, item) => {
      map[item.id] = item.count;
      return map;
    }, {});

    goodsEntities.forEach(({ price, _id }) => {
      const count = goodsCountMap[_id];
      totalPrice += parseFloat(price.value) * count;
    });

    totalPrice += parseFloat(DELIVERY_PRICE.value);

    data.totalPrice = {
      currency: USD._id,
      value: totalPrice.toFixed(2),
    };

    const order = new Order(data);
    const savedOrder = await order.save();

    res.status(httpStatus.CREATED);
    res.json(savedOrder);
  } catch (error) {
    next(error);
  }
};
