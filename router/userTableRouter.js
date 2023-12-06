const express = require("express");

const readUser = require("../utilities/populateUserTable");
const populateUserTable = require("../controller/userTableController");
const deleteUser = require("../utilities/tableCRUD");
const loginRouter = require("../router/loginRouter");
const session = require("../common/session");

const router = express.Router();

router.get("/", session, async (req, res, next) => {
  if (req.query.selectedUsers) {
    // Handle the logic for deleting users
    const users = req.query.selectedUsers;
    console.log(users);
    try {
      await deleteUser(users);
      res.redirect("http://localhost:3000/userlist");
    } catch (e) {
      console.log(e.message);
      res.status(500).send("Internal Server Error");
    }
  } else {
    await populateUserTable(req, res);
  }
});


router.get("/:id", session, async (req, res) => {
  const user = req.query.data.replace(/^\s+|\s+$/gm, "").split("\n");
  try {
    //console.log(user);
    res.render("profile", { user });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;

// router.get("/", async (req, res) => {
//   if (req.query.selectedUsers) {
//     // Handle the logic for deleting users
//     const users = req.query.selectedUsers;
//     console.log(users)
//     try {
//       await deleteUser(users);
//       res.redirect("http://localhost:3000/userlist");
//     } catch (e) {
//       console.log(e.message);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// });
