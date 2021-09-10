const mongoose = require("mongoose")

const hotelBookingSchema = new mongoose.Schema({
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, }
})
module.exports = mongoose.model("HotelBooking", hotelBookingSchema)