const { getObjectId } = require("mongo-seeding");

module.exports = [
  {
    goods: [
      {
        id: getObjectId("Pizza#2"),
        count: 2,
      },
      {
        id: getObjectId("Pizza#3"),
        count: 1,
      },
      {
        id: getObjectId("Pizza#4"),
        count: 1,
      },
    ],
    address: {
      street: "Backer St.",
      floor: 1,
      flat: "221B",
    },
    totalPrice: {
      currency: getObjectId("USD"),
      value: "53",
    },
    user: getObjectId("user.example@mail.com"),
  },
];
