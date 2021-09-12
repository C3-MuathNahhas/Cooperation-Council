const express = require("express");
const Authentication=require("../../middlewares/authentication")
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
flightBookingRouter.delete("/:bookingId",Authentication, isBookingExist, updateFlightCapacity, deleteFlightBooking);
flightBookingRouter.get("/allBooking/:userId", getFlightsBookingByUserId);
flightBookingRouter.get("/allBooking/", getAllFlightsBooking);
flightBookingRouter.put("/:bookingId",Authentication, isBookingExist, isFlightFit, updateFlightCapacity, updateFlightBooking);

module.exports = flightBookingRouter;
