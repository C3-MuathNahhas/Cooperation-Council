const express = require("express");
const flightBookingRouter = express.Router();

const {
  getFlightsBookingByUserId,
  creatFlightBooking, deleteFlightBooking
} = require("../../controllers/flight/flightBookingController");

flightBookingRouter.post("/", creatFlightBooking);
flightBookingRouter.delete(":bookingId", deleteFlightBooking);
flightBookingRouter.get("/allBooking/:userId", getFlightsBookingByUserId);
module.exports = flightBookingRouter;
