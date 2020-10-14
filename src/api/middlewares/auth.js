const util = require("util");
const httpStatus = require("http-status");
const passport = require("passport");
const APIError = require("../utils/APIError");

const handleJWT = (req, res, next) => async (err, user, info) => {
  const error = err || info;
  const logIn = util.promisify(req.logIn);

  const apiError = new APIError({
    message: error ? error.message : "Unauthorized",
    status: httpStatus.UNAUTHORIZED,
    stack: error ? error.stack : undefined,
  });

  try {
    if (error || !user) throw error;
    await logIn(user, { session: false });
  } catch (e) {
    return next(apiError);
  }

  req.user = user;

  return next();
};

exports.authorize = (isOptional) => (req, res, next) => {
  if (isOptional && !req.headers.authorization) {
    return next();
  }

  return passport.authenticate(
    "jwt",
    { session: false },
    handleJWT(req, res, next, { isOptional })
  )(req, res, next);
};
