const City = require("../models/City");

const getAll = (req, res) => {
	City.find().then(cities => res.json(cities));
}

module.exports = { getAll }