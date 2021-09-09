const express = require("express");
const hotelRouter = express.Router();

const {
    getHotels,hotelcreate
} = require("../../controllers/hotel/hotelController");

hotelRouter.post("/createhotel", hotelcreate);
hotelRouter.get("/gethotel", getHotels);

module.exports = hotelRouter;