const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const User = require("../../models/User");

router.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save((err) => {
    if (err) {
      res.json({ success: false, message: "Well you screwed up." });
      res.end();
    } else {
      res.end();
    }
  });
  // User.findOne({ email: req.body.email }).then((user) => {
  //   if (user) {
  //     return res.status(400).json({ email: "Email already exists" });
  //   } else {
  //     const newUser = new User({
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: req.body.password,
  //     });
  //   }
  // });
});

module.exports = router;
