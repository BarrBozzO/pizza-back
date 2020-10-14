const { Joi } = require("express-validation");

module.exports = {
  register: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .regex(/[a-zA-Z0-9]{8,30}/)
        .required(),
      name: Joi.string().max(128),
    }).required(),
  },
  login: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }).required(),
  },
};
