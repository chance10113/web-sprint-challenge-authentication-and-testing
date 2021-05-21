const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./../config");

function tokenBuilder(user) {
  // {id, username, role}
  const payload = {
    sub: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "2d",
  };
  const result = jwt.sign(payload, JWT_SECRET, options);
  return result;
}

module.exports = tokenBuilder;
