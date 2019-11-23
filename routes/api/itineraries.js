const express = require("express");
const router = express.Router();

// Itinerary Model
const Itinerary = require("../../models/Itinerary");

router.get("/", async (req, res) => {
  const itineraries = await Itinerary.find();
  res.json(itineraries)
});

router.get('/:city', (req, res) => {
  let cityRequested = req.params.city;
  Itinerary.find({ city: cityRequested })
    .then(city => { res.send(city) })
    .catch(err => console.log(err));
});

module.exports = router;