const { getObjectId } = require("mongo-seeding");

module.exports = [
  {
    from: getObjectId("USD"),
    to: getObjectId("EUR"),
    value: "1.18",
  },
];
