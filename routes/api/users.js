const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const key = require("../../config/keys").secretOrKey;
const jwt = require("jsonwebtoken");

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

router.post('/', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country
  })

  bcrypt.hash(req.body.password, saltRounds, function (error, hash) {
    if (error) throw error
    newUser.password = hash
    newUser.save().then(user => res.json(user))
      .then(user => {
        res.json(user.username)
        res.redirect('/login')
      }).catch(e => console.log(e))
  })
});

router.post('/login', async (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user =>
      {console.log("user es " + user);
      bcrypt.compare(req.body.password, user.password, function (err) {
        if (!err) {
          jwt.sign(
            { id: user._id },
            key,
            { expiresIn: 2592000 },
            (err, token) => {
              if (err) {
                res.json({
                  success: false,
                  token: "There was an error"
                })
              } else {
                res.json({
                  success: true,
                  token: token
                })
              }
            }
          )
        } else {
          res.send("Error")
        }
      })
      }).catch(e => console.log(e))
})

module.exports = router;