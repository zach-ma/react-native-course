const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password }); // create user
    await user.save(); // save to mongo

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY"); // create jwt token
    res.send({ token });
    // res.send("You made a post request");
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
