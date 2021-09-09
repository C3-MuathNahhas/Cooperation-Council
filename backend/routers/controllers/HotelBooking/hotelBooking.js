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
  }).populate("Hotel", "- _id");
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
const updateHotelBooking = (req, res) => {
  const id = req.params.bookingId; //id from route HotelBooking
  const { rooms, nights, adults } = req.body;
  hotelBookingModel
    .updateOne({ id: id }, { rooms, nights, adults }, { options: true })
    .populate("Hotel", "- _id")
    .then((result) => {
      res.status(201).json({
        succes: true,
        success: "hotel booking updated",
        result: result,
        success: "hotel booking updated",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        succes: false,
        massage: "error in updated hotelbooking",
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

const getHotelsBookingsByUserId = (req, res) => {
  const id = req.params.userId;

  hotelBookingModel
    .find({ id: id })//from id user
    .then((result) => {
      res.status(201).json({
        succes: true,
        success: "getAllHotelsBooking ",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        succes: false,
        massage: "error getHotelsBookingsByUserId",
      });
    });
};

module.exports = {
  createHotelBooking,
  deleteHotelBooking,
  updateHotelBooking,
  getHotelsBookingsByUserId,
};
