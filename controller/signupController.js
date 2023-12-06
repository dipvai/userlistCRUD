const userFileUploader = require("../utilities/userUploader");

function getSignup(req, res) {
  res.render("index");
}

function signUp(req, res) {
  userFileUploader(req);
  res.send("User added successfully");
}

module.exports = {
  signUp,
  getSignup,
};
