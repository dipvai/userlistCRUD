const fs = require("fs").promises;
const path = require("path");
const userTableController = require("./userTableController");

const loginVerification = require("../utilities/loginVerification");



function getLogin(req, res) {
  res.render("login");
}

async function login(req, res, next) {
  const userDetails = req.body;
  let isVerified = await loginVerification(userDetails);
  console.log(isVerified);
  return isVerified;
}

module.exports = {
  getLogin,
  login,
};
