const fs = require("fs");
const express = require("express");
const path = require("path");


const signupRouter = require("./router/signupRouter");
const loginRouter = require("./router/loginRouter");
const userTableRouter = require("./router/userTableRouter");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", loginRouter);

app.use("/signup", signupRouter);

app.use("/userlist", userTableRouter);


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
