const { getObjectId } = require("mongo-seeding");

module.exports = [
  {
    _id: getObjectId("test@mail.test"),
    email: "user.example@mail.com",
    password: "$2a$10$Wtl6bwgF8fGao.Kab5Ly/OyZ.koWmJ.rPpfQEoaujX1u5RYj3mUJq",
    name: "user name",
  },
];
