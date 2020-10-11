const Goods = require("../models/goods.model");

exports.get = async (_, res, next) => {
  try {
    const goods = await Goods.find().populate({
      path: "price.currency",
      select: "name",
    });
    return res.json({ goods });
  } catch (error) {
    next(error);
  }
};
