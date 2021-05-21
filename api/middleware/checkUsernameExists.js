const User = require("../users/users-model");

async function checkUsernameExists(req, res, next) {
  try {
    const users = await User.getUserBy({ username: req.body.username });
    if (users.length) {
      req.user = users[0];
      next();
    } else {
      next({ message: "Invalid credentials", status: 401 });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = checkUsernameExists;
