const { getObjectId } = require("mongo-seeding");

module.exports = [
  {
    _id: getObjectId("Pizza#1"),
    name: "10 Cheeses",
    description:
      "Even more cheeses! Mozzarella, classic chillegini, soft young cheese, smoked Italian cheese mix, blue cheese, Reggianito, Cheddar with Parmegiano and oregano sauce",
    picture:
      "https://cdn.papajohns.ru/images/catalog/thumbs/full/5b22b77dad21aaa5026b76cc6251935d.jpg",
    price: { currency: getObjectId("USD"), value: "4" },
  },
  {
    _id: getObjectId("Pizza#2"),
    name: "Italian with mozzarella and pepperoni",
    description:
      "Traditional Italian recipe with two types of cheese: grated Mozzarella and classic chillegini; spicy pepperoni, mushrooms and blend of seasonings",
    picture:
      "https://cdn.papajohns.ru/images/catalog/thumbs/full/e9bd5c6431e2148b1a5fd7d8b9d0df10.jpg",
    price: { currency: getObjectId("USD"), value: "11" },
  },
  {
    _id: getObjectId("Pizza#3"),
    name: "Sweet and sour pork",
    description:
      "Bright pizza with pork, pineapple, sweet and sour sauce, red and green peppers and Mozzarella cheese",
    picture:
      "https://cdn.papajohns.ru/images/catalog/thumbs/full/18a85f746b9e0ecf90a82d94b4c46b8d.jpg",
    price: { currency: getObjectId("USD"), value: "15" },
  },
  {
    _id: getObjectId("Pizza#4"),
    name: "Pizza with red fish",
    description:
      "The long-awaited pizza! Fresh taste! Bold mix of salmon fish with mozzarella cheese, cream cheese and tomatoes",
    picture:
      "https://cdn.papajohns.ru/images/catalog/thumbs/full/c6ac6769d068cf8e34c5a507d850b79f.png",
    price: { currency: getObjectId("USD"), value: "6" },
  },
  {
    _id: getObjectId("Pizza#5"),
    name: "Chicken blue cheese",
    description:
      "Perfect combination: tender chicken fillet with blue cheese crumbles, Parmeggiano sauce, mix of Italian cheeses and Mozzarella cheese",
    picture:
      "https://cdn.papajohns.ru/images/catalog/thumbs/full/Hawai-traditional.jpg",
    price: { currency: getObjectId("USD"), value: "9" },
  },
  {
    _id: getObjectId("Pizza#6"),
    name: "Meat",
    description:
      "Super meat pizza with spicy pepperoni, ham, crispy bacon, flavorful pork, beef, Mozzarella and signature tomato sauce",
    picture:
      "https://cdn.papajohns.ru/images/catalog/thumbs/full/Pepperoni-traditional.jpg",
    price: { currency: getObjectId("USD"), value: "10" },
  },
  {
    _id: getObjectId("Pizza#7"),
    name: "Chicken BBQ",
    description:
      "Juicy chicken fillet and crispy bacon combined with signature tomato sauce, Mozzarella and onion",
    picture:
      "https://cdn.papajohns.ru/images/catalog/thumbs/full/Chicken-BBQ-traditional.jpg",
    price: { currency: getObjectId("USD"), value: "4" },
  },
  {
    _id: getObjectId("Pizza#8"),
    name: "Pepperoni",
    description:
      "American classic with spicy pepperoni, Mozzarella and signature tomato sauce",
    picture:
      "https://cdn.papajohns.ru/images/catalog/thumbs/full/Cheese-traditional.jpg",
    price: { currency: getObjectId("USD"), value: "9" },
  },
];
