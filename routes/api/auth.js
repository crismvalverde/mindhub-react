const express = require("express");
const router = express.Router();

router.get('/Google', (req, res) => { 
  res.send("Google login")
});