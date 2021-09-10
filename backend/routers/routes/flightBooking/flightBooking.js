const express = require("express");
const flightBookingRouter = express.Router();

const {
  getFlightsBookingByUserId,
  creatFlightBooking, deleteFlightBooking, getAllFlightsBooking
} = require("../../controllers/flight/flightBookingController");

flightBookingRouter.post("/", creatFlightBooking);
flightBookingRouter.delete(":bookingId", deleteFlightBooking);
flightBookingRouter.get("/allBooking/:userId", getFlightsBookingByUserId);
flightBookingRouter.get("/allBooking/", getAllFlightsBooking);



module.exports = flightBookingRouter;
