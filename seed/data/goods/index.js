const { getObjectId } = require("mongo-seeding");

module.exports = [
  {
    _id: getObjectId("Pizza#1"),
    name: "10 Cheeses",
    description:
      "Even more cheeses! Mozzarella, classic chillegini, soft young cheese, smoked Italian cheese mix, blue cheese, Reggianito, Cheddar with Parmegiano and oregano sauce",
    price: { currency: getObjectId("USD"), value: "4" },
  },
  {
    _id: getObjectId("Pizza#2"),
    name: "Italian with mozzarella and pepperoni",
    description:
      "Traditional Italian recipe with two types of cheese: grated Mozzarella and classic chillegini; spicy pepperoni, mushrooms and blend of seasonings",
    price: { currency: getObjectId("USD"), value: "11" },
  },
  {
    _id: getObjectId("Pizza#3"),
    name: "Sweet and sour pork",
    description:
      "Bright pizza with pork, pineapple, sweet and sour sauce, red and green peppers and Mozzarella cheese",
    price: { currency: getObjectId("USD"), value: "15" },
  },
  {
    _id: getObjectId("Pizza#4"),
    name: "Pizza with red fish",
    description:
      "The long-awaited pizza! Fresh taste! Bold mix of salmon fish with mozzarella cheese, cream cheese and tomatoes",
    price: { currency: getObjectId("USD"), value: "6" },
  },
  {
    _id: getObjectId("Pizza#5"),
    name: "Chicken blue cheese",
    description:
      "Perfect combination: tender chicken fillet with blue cheese crumbles, Parmeggiano sauce, mix of Italian cheeses and Mozzarella cheese",
    price: { currency: getObjectId("USD"), value: "9" },
  },
  {
    _id: getObjectId("Pizza#6"),
    name: "Meat",
    description:
      "Super meat pizza with spicy pepperoni, ham, crispy bacon, flavorful pork, beef, Mozzarella and signature tomato sauce",
    price: { currency: getObjectId("USD"), value: "10" },
  },
  {
    _id: getObjectId("Pizza#7"),
    name: "Chicken BBQ",
    description:
      "Juicy chicken fillet and crispy bacon combined with signature tomato sauce, Mozzarella and onion",
    price: { currency: getObjectId("USD"), value: "4" },
  },
  {
    _id: getObjectId("Pizza#8"),
    name: "Pepperoni",
    description:
      "American classic with spicy pepperoni, Mozzarella and signature tomato sauce",
    price: { currency: getObjectId("USD"), value: "9" },
  },
];
