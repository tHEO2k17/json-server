const express = require("express");
const router = express.Router();

const Auth = require("../models/Auth");

router.post("/login", async (req, res) => {
  try {
    const authorized = await Auth.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (!authorized) throw Error("No user found");

    res.status(200).json({success: true});
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = new Auth(req.body);
    const user = await newUser.save();
    if (!user) throw Error("Something went wrong while saving property");

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
