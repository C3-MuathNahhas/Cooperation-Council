const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  rooms: { type: Number },
  nights: { type: Number },
  adults: { type: Number },
});
module.exports = mongoose.model("Hotel", hotelSchema);
