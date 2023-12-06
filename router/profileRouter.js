const express = require("express");


const router = express.Router();


router.get("/", async (req, res) => {
  try {
    res.render("profile");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
