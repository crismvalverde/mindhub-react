const express = require("express");
const router = express.Router();

// City Model
const Itinerary = require("../../models/Itinerary");

// @route   GET api/cities
// @desc    Get all cities
// @access  Public
router.get('/cities/all/:name', (req, res) => {
  let cityRequested = req.params.name;
  City.findOne({ name: cityRequested })
    .then(city => { res.send(city) })
    .catch(err => console.log(err));
});

module.exports = router;