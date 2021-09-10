const { deleteOne } = require("../../../db/models/hotelBookingSchema");
const hotelBookingModel = require("../../../db/models/hotelBookingSchema");

const createHotelBooking = (req, res) => {
  const { hotelId, userId } = req.body;

  const newHotelBookig = new hotelBookingModel({
    hotelId,
    userId,
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
    .catch(() => {
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
    .deleteOne({ _id: id })
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
    .find({ userId: id })
    .populate("hotelId").populate("userId")
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
  getHotelsBookingsByUserId,
};
