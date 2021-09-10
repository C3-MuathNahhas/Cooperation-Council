const express = require("express");
// const {
// //   createNewFlight,
// //   getFlights,
// } = require("../controllers/flight/flightController");

const { createNewFlight,getFlights}= require("../../controllers/flight/flightController");
const flightRouter = express.Router();

flightRouter.post("/",createNewFlight)

 flightRouter.get("/search",getFlights)

module.exports = flightRouter;
