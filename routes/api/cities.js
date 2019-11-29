const express = require("express");
const router = express.Router();
const cityController  = require("../../controller/cityController");

// City Model
const City = require("../../models/City");


// router.get( cityController.getAll());


router.get("/", (req, res) => {
  City.find().then(cities => res.json(cities));
});

router.get("/all", async (req, res) => {
    const cities = await City.find();
    res.json(cities)
  });
  

module.exports = router;
