require("dotenv").config();
const { Seeder } = require("mongo-seeding");
const path = require("path");

const config = {
  database: process.env.MONGO_URI,
  dropCollections: true,
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve(__dirname, "./data")
);

seeder
  .import(collections)
  .then(() => {
    console.log("DONE");
  })
  .catch((err) => {
    console.error(err);
  });
