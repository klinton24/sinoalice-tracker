const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.route("/register").post((req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userName = req.body.userName;
    const newUser = new User({
        email,
        password,
        userName
    });

    newUser.save();
})

module.exports = router;
