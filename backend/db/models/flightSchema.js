const mongoose = require("mongoose");
const flightSchema = new mongoose.Schema({
  distination: { type: String, required: true },
  origin: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  capacity: { type: Number },
  flightId: { type: String },
});

module.exports = mongoose.model("Flight", flightSchema);
