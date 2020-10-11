const mongoose = require("mongoose");
const { mongo, env } = require("./vars");

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

if (env === "development") {
  mongoose.set("debug", true);
}

exports.connect = () => {
  mongoose
    .connect(mongo.uri, {
      useCreateIndex: true,
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("mongoDB connected..."));
  return mongoose.connection;
};