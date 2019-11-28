const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema ({
    title: String,
    profilePic: String,
    rating: Number,
    duration: Number,
    price: Number,
    hashtag: Array,
    city: { type: Schema.Types.ObjectId, ref: "cities"}
})

module.exports = Itinerary = mongoose.model("Itinerary", ItinerarySchema);