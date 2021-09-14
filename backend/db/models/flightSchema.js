const mongoose = require("mongoose");
const flightSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  origin: { type: String, required: true },
  date: { type: Date, required: true },
  capacity: { type: Number, min: 0 },
  price: { type: Number }
});

module.exports = mongoose.model("Flight", flightSchema);
