const Currency = require("../models/currency.model");

exports.get = async (_, res, next) => {
  try {
    const currencies = await Currency.find();
    return res.json({
      currencies: currencies.map((currency) => currency.transform()),
    });
  } catch (error) {
    next(error);
  }
};
