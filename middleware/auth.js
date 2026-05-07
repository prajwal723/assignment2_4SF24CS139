const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  let token = req.headers.authorization;

  if (!token) {
    return res.send("Token Required");
  }

  try {
    let verified = jwt.verify(token, "secretkey");

    req.user = verified;

    next();
  } catch (err) {
    res.send("Invalid Token");
  }
}

module.exports = auth;
