const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// const cities = require("./routes/api/cities");

const app = express();
app.use(cors())

// Bodyparser Middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// DB config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log('err', err))

// Use Routes
//const router = express.Router();
const router = require("./routes/api/cities");


// router.get("/cities/all", async (req, res) => {
//   const cities = await City.find();
//   res.json(cities)
// });

// router.get('/cities/all/:name', (req, res) => {
//   let cityRequested = req.params.name;
//   City.findOne({ name: cityRequested })
//     .then(city => { res.send(city) })
//     .catch(err => console.log(err));
// });

app.use("/", router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
