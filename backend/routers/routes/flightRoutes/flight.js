const express = require("express");
const {
  createNewFlight,
  getFlights,getAvailableFlights
} = require("../../controllers/flight/flightController");
const flightRouter = express.Router();

//flightRouter.post("/", createNewFlight);

flightRouter.post("/search", getFlights);

flightRouter.post("/", getAvailableFlights);

module.exports = flightRouter;
