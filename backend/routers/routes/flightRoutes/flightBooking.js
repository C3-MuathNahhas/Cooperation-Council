const express = require("express");
const flightBookingRouter = express.Router();

const {
  getFlightsBookingByUserId,
  creatFlightBooking,
  deleteFlightBooking,
  getAllFlightsBooking,
  updateFlightBooking,
  isBookingExist,
  isFlightFit,
} = require("../../controllers/flight/flightBookingController");
const {
  updateFlightCapacity,
} = require("../../controllers/flight/flightController");

flightBookingRouter.post("/",Authentication,isFlightFit,updateFlightCapacity, creatFlightBooking);
flightBookingRouter.delete("/:bookingId", isBookingExist, updateFlightCapacity, deleteFlightBooking);
flightBookingRouter.get("/allBooking/:userId", getFlightsBookingByUserId);
flightBookingRouter.get("/allBooking/", getAllFlightsBooking);
flightBookingRouter.put("/:bookingId", isBookingExist, isFlightFit, updateFlightCapacity, updateFlightBooking);

module.exports = flightBookingRouter;
