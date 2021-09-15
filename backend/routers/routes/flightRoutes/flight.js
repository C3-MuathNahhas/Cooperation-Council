const express = require("express");
const {
  createNewFlight,
  getFlights,
  getAvailableFlights,
} = require("../../controllers/flight/flightController");
const flightRouter = express.Router();

flightRouter.get("/", getFlights);

flightRouter.post("/search", createNewFlight);

flightRouter.post("/", getAvailableFlights);

module.exports = flightRouter;
