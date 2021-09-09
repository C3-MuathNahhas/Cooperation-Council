const express = require("express");
const hotelRouter = express.Router();

const {
    getHotels,hotelcreate
} = require("../controllers/hotel/hotelController");

hotelBookingRouter.post("/createhotel", hotelRouter);

module.exports = hotelRouter;