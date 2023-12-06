const fs = require("fs").promises;
const path = require("path");

const createSession = require("../utilities/sessionCreator");

const dir = path.join(__dirname, "../");

let loginVerification = async function (userDetails, req, res) {
  try {
    const data = await fs.readFile(
      dir + `user/${userDetails.email}` + ".json",
      "utf-8"
    );
    const dataFromFile = JSON.parse(data);
    if (dataFromFile.password === userDetails.password) {
      await createSession()
      return true;
    } else {
      res.redirect("http://localhost:3000/");
      return false;
    }
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

module.exports = loginVerification;
