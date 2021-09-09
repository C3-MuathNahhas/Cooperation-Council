const express = require("express");
const hotelBookingRouter = express.Router();

const {
  createHotelBooking,
  deleteHotelBooking,
  updateHotelBooking,
  getHotelsBookingsByUserId,
} = require("../controllers/HotelBooking/hotelBooking");

hotelBookingRouter.post("/create", createHotelBooking);
hotelBookingRouter.post("/delete/:bookingId", deleteHotelBooking);
hotelBookingRouter.post("/update/:bookingId", updateHotelBooking);
hotelBookingRouter.post("/allBooking/:UserId", getHotelsBookingsByUserId);
module.exports = hotelBookingRouter;
