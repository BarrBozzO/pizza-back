const Goods = require("../models/goods.model");
const Currency = require("../models/currency.model");
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
    const goods = await Goods.find().populate({
      path: "price.currency",
      select: ["name", "iso"],
    });

    if (!goods.length) {
      return res.json({ goods: [] });
    }

    const goodsCurrency = goods[0].price.currency; // get basic currency
    const targetCurrency = await getQueryCurrency(req);

    let data = goods.map((item) => item.transform());

    if (targetCurrency && targetCurrency.iso !== goodsCurrency.iso) {
      const rate = await ExcRate.findOne({
        from: goodsCurrency._id,
        to: targetCurrency._id,
      });

      if (!rate) {
        throw Error;
      }

      data = data.map((item) => {
        return {
          ...item,
          price: {
            currency: {
              name: targetCurrency.name,
              iso: targetCurrency.iso,
            },
            value: (
              parseFloat(item.price.value) * parseFloat(rate.value)
            ).toFixed(2),
          },
        };
      });
    }

    return res.json({ goods: data });
  } catch (error) {
    next(error);
  }
};
