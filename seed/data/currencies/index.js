const { getObjectId } = require("mongo-seeding");

module.exports = [
  {
    _id: getObjectId("USD"),
    name: "dollar",
    iso: "USD",
  },
  {
    _id: getObjectId("EUR"),
    name: "euro",
    iso: "EUR",
  },
];
