const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CitySchema = new Schema({
  name: String,
  country: String
});

module.exports = City = mongoose.model("cities", CitySchema);
