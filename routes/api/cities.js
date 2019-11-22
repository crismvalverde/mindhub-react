const express = require("express");
const router = express.Router();

// City Model
const City = require("../../models/City");

// @route   GET api/cities
// @desc    Get all cities
// @access  Public
router.get("/", (req, res) => {
  City.find().then(cities => res.json(cities));
});

router.get("/cities/all", async (req, res) => {
    const cities = await City.find();
    res.json(cities)
  });
  

module.exports = router;
