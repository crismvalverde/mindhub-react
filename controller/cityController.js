const City = require("../models/City");

const getAll = (req, res) => {
	City.find().then(cities => res.json(cities));
}

// const getObtenerAll = (req, res) => {
// 	async (req, res) => {
// 		const cities = await City.find();
// 		res.json(cities)
// 	}
// }

module.exports = { getAll, getObtenerAll }