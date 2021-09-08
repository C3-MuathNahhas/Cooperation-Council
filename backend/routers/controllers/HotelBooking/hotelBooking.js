const { deleteOne } = require("../../../db/models/hotelBookingSchema");
const hotelBookingModel = require("../../../db/models/hotelBookingSchema");

const createHotelBooking = () => {
  const { location, capacity, rooms } = req.body;

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

const deleteHotelBooking = (req, res) => {
  const id = req.params.bookingId;
  hotelBookingModel.deleteOne({ id: bookingId })
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
