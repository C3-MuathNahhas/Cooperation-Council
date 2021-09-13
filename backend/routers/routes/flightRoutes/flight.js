const express = require("express");
// const {
// //   createNewFlight,
// //   getFlights,
// } = require("../controllers/flight/flightController");

const { createNewFlight,getFlights}= require("../../controllers/flight/flightController");
const flightRouter = express.Router();

flightRouter.post("/",createNewFlight)

 flightRouter.post("/search",getFlights)

module.exports = flightRouter;
