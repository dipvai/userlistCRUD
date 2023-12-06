const readUser = require("../utilities/populateUserTable");

const populateUserTable = async function (req, res) {
  try {
    const userData = await readUser();
    res.render("userTable", {userData});
  } catch (err) {
    console.log(err.msg);
  }
};

module.exports = populateUserTable