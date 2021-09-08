const { deleteOne } = require("../../../db/models/hotelBookingSchema");
const hotelBookingModel = require("../../../db/models/hotelBookingSchema");

const createHotelBooking = (req, res) => {
  const { location, capacity, rooms, nights, adults } = req.body;

  const newHotelBookig = new hotelBookingModel({
    location,
    capacity,
    rooms,
    nights,
    adults,
  });
  newHotelBookig
    .save()
    .then((result) => {
      res.status(201).json({
        succes: true,
        success: "new hotel booking created",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        succes: false,
        massage: "no availability to create hotel booking",
      });
    });
};

//should select the capasity of users
const deleteHotelBooking = (req, res) => {
  const id = req.params.bookingId;
  hotelBookingModel
    .deleteOne({ id: id })
    .then(() => {
      res.status(201).json({
        succes: true,
        success: "hotel booking deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        succes: false,
        massage: "error in deleted hotelbooking",
      });
    });
};

module.exports = { createHotelBooking, deleteHotelBooking };
