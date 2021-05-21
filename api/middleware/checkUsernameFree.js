const User = require("../users/users-model");

async function checkUsernameFree(req, res, next) {
  try {
    const users = await User.getUserBy({ username: req.body.username });
    if (!users.length) {
      next();
    } else {
      next({ message: "Username taken", status: 422 });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = checkUsernameFree;
