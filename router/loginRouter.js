const express = require("express");

const { getLogin, login } = require("../controller/loginController");



const router = express.Router();

router.get("/", getLogin);

router.post("/", async (req, res, next) => {
  try {
    let isLogged = await login(req, res);
    console.log(isLogged);
    if (isLogged) {
      res.sendFile("/Users/dipvai/Desktop/node_project/public/index.html");
    }else{
      res.send("invalid login")
    }
  } catch (err) {
    console.log(err.message );
  }
});

module.exports = router;
