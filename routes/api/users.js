const express = require("express");
const router = express.Router();

// User Model
const User = require("../../models/User");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users)
});

router.get('/:username', (req, res) => {
  let userRequested = req.params.user;
  User.find({ user: userRequested })
    .then(user => { res.send(user) })
    .catch(err => console.log(err));
});

router.post('/', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country
  })
  newUser.save()
    .then(user => { res.send(user) })
    .catch(err => { res.status(500).send("Server error") })
});

module.exports = router;