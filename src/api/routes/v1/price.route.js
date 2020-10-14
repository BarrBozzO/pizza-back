const express = require("express");
const controller = require("../../controllers/price.controller");

const router = express.Router();

router.route("/").get(controller.get);

module.exports = router;
