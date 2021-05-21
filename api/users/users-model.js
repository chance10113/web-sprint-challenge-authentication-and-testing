const db = require("../../data/dbConfig");

function get() {
  return db("users as u").select("u.id", "u.username", "u.password");
}

function getUserBy(filter) {
  return db("users").select("id", "username", "password").where(filter).first();
}

async function addUser(user) {
  const [id] = await db("users").insert(user);
  return getUserID(id);
}

function getUserID(id) {
  return db("users").where("id", id);
}
module.exports = {
  get,
  addUser,
  getUserBy,
  getUserID,
};
