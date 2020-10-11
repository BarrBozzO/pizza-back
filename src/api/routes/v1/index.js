const express = require("express");
const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");
const currencyRoutes = require("./currency.route");
const goodsRoutes = require("./goods.route");
const orderRoutes = require("./order.route");

const router = express.Router();

/**
 * GET v1/status
 */
router.get("/status", (_, res) => res.send("OK"));

// TODO check route naming
router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/currency", currencyRoutes);
router.use("/goods", goodsRoutes);
router.use("/order", orderRoutes);

module.exports = router;
