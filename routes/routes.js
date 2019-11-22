const express = require("express");
const router = express.Router();
const cityController  = require("../controller/cityController");
// City Model


//ItineraryModel

// @route   GET api/cities
// @desc    Get all cities
// @access  Public
router.get("/", cityController.getAll());
// router.get("/cities/all", cityController.getObtenerAll());



// @route   GET api/Itineraries
// @desc    Get all Itineraries
// @access  Public



module.exports = router;
