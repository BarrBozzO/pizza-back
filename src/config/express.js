const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const passport = require("passport");
const routes = require("../api/routes/v1");
const { logs } = require("./vars");
const strategies = require("./passport");
const error = require("../api/middlewares/error");

const app = express();

app.use(morgan(logs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());
app.use(cors());

// auth
app.use(passport.initialize());
passport.use("jwt", strategies.jwt);

// routes
app.use("/v1", routes);

app.use(error.converter);
app.use(error.notFound);
app.use(error.handler);

module.exports = app;
