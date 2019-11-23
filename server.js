const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(cors())

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log('err', err))

const routerCities = require("./routes/api/cities");
const routerItineraries = require("./routes/api/itineraries");

app.use("/cities", routerCities);
app.use("/itineraries", routerItineraries);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
