const express = require("express");
const hotelBookingRouter = express.Router();

const {
  createHotelBooking,
  deleteHotelBooking,
  getHotelsBookingsByUserId,getHotelBooking
} = require("../../controllers/hotel/hotelBooking");

hotelBookingRouter.post("/create", createHotelBooking);
hotelBookingRouter.delete("/delete/:bookingId", deleteHotelBooking);
hotelBookingRouter.get("/allBooking/:userId", getHotelsBookingsByUserId);
hotelBookingRouter.get("/:bookingId")
module.exports = hotelBookingRouter;
