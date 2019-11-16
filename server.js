const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const City = require("./models/City");
const Itinerary = require("./models/Itinerary");

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
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("This is the homepage!");
// });

// router.get("/test", (req, res) => {
//   res.send({ msg: "Test Works" });
// });

router.get("/cities/all", async (req, res) => {
  const cities = await City.find();
  res.json(cities)
});

app.use("/", router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
