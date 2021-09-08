const hotelBookingModel = require("../../../db/models/hotelBookingSchema");

const createHotelBooking = () => {
  const { location, capacity, rooms } = req.body;

  const newHotelBookig = new hotelBookingModel({
    location,
    capacity,
    rooms,
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
        success: "no availability",
        massage: err,
      });
    });
};
