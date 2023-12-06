const express = require('express');
const {getSignup, signUp} = require("../controller/signupController");    
const session = require("../common/session");

const router = express.Router();

router.get('/', session, getSignup);

router.post('/', signUp);

module.exports = router;