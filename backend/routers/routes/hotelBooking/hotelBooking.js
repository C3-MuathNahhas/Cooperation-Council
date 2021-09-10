const express = require("express");
const hotelBookingRouter = express.Router();

const {
  createHotelBooking,
  deleteHotelBooking,
  getHotelsBookingsByUserId,
} = require("../../controllers/HotelBooking/hotelBooking");

hotelBookingRouter.post("/create", createHotelBooking);
hotelBookingRouter.delete("/delete/:bookingId", deleteHotelBooking);
hotelBookingRouter.get("/allBooking/:userId", getHotelsBookingsByUserId);
module.exports = hotelBookingRouter;
