const express = require("express");
const hotelBookingRouter = express.Router();

const {
  createHotelBooking,
  deleteHotelBooking,
  getHotelsBookingsByUserId,getHotelBooking
} = require("../../controllers/hotel/hotelBookingController");

hotelBookingRouter.post("/", createHotelBooking);
hotelBookingRouter.delete("/delete/:bookingId", deleteHotelBooking);
hotelBookingRouter.get("/allBooking/:userId", getHotelsBookingsByUserId);
hotelBookingRouter.get("/:bookingId",getHotelBooking)

module.exports = hotelBookingRouter;
