const express = require("express");
const hotelRouter = express.Router();

const {
    getHotels,hotelcreate
} = require("../../controllers/hotel/hotelController");

hotelRouter.post("/", hotelcreate);
hotelRouter.get("/", getHotels);

module.exports = hotelRouter;