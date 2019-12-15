const express = require("express");
const router = express.Router();

// Itinerary Model
const Itinerary = require("../../models/Itinerary");

router.get("/", async (req, res) => {
  const itineraries = await Itinerary.find();
  res.json(itineraries)
});

router.get('/:id', (req, res) => {
  let cityRequested = req.params.id;
  Itinerary.find({ city: cityRequested })
    .then(id => { res.send(id) })
    .catch(err => console.log(err));
});

module.exports = router;