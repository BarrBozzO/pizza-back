exports.loggedIn = (req, res) => res.json(req.user.transform());
