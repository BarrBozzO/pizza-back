const express = require("express");
const { validate } = require("express-validation");
const controller = require("../../controllers/order.controller");
const { create } = require("../../validations/order.validation");
const { authorize } = require("../../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .get(authorize(), controller.get)
  .post(
    authorize({ isOptional: true }),
    validate(create, {}, {}),
    controller.create
  );

module.exports = router;
