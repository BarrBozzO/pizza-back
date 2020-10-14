const Price = require("../models/price.model");

exports.get = async (_, res, next) => {
  try {
    const prices = await Price.find();
    return res.json({ prices });
  } catch (error) {
    next(error);
  }
};
