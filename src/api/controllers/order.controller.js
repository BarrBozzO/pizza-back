const httpStatus = require("http-status");
const Order = require("../models/order.model");
const Currency = require("../models/currency.model");
const Price = require("../models/price.model");
const Goods = require("../models/goods.model");
const ExcRate = require("../models/exchangeRate.model");

function getQueryCurrency(req) {
  const currencyISO = req.query.currency;

  if (currencyISO) {
    return Currency.findOne({
      iso: currencyISO,
    });
  }

  return Promise.resolve();
}

exports.get = async (req, res, next) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    })
      .populate({
        path: "totalPrice.currency",
        select: ["name", "iso"],
      })
      .populate({
        path: "goods.id",
        model: "Goods",
        select: ["name", "description"],
      });

    if (!orders.length) {
      return res.json({ orders: [] });
    }

    const ordersCurrency = orders[0].totalPrice.currency; // get basic currency
    const targetCurrency = await getQueryCurrency(req);

    let data = orders.map((item) => item.transform());

    if (targetCurrency && targetCurrency.iso !== ordersCurrency.iso) {
      const rate = await ExcRate.findOne({
        from: ordersCurrency._id,
        to: targetCurrency._id,
      });

      if (!rate) {
        throw Error;
      }

      data = data.map((item) => {
        return {
          ...item,
          totalPrice: {
            currency: {
              name: targetCurrency.name,
              iso: targetCurrency.iso,
            },
            value: (
              parseFloat(item.totalPrice.value) * parseFloat(rate.value)
            ).toFixed(2),
          },
        };
      });
    }

    return res.json({ orders: data });
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
