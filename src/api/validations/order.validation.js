const { Joi } = require("express-validation");

const orderSchema = {
  id: Joi.string().required(),
  count: Joi.number().min(1).required(),
};

const addressSchema = {
  street: Joi.string().trim().min(1).max(512).required(),
  flat: Joi.string().trim().min(1).max(32).required(),
  floor: Joi.number().min(-1).required(),
};

module.exports = {
  create: {
    body: Joi.object({
      goods: Joi.array().min(1).items(Joi.object(orderSchema)).required(),
      address: Joi.object(addressSchema).required(),
    }).required(),
  },
};
