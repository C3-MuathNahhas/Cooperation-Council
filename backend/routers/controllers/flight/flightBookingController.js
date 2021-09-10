const flightBookingModle = require("../../../db/models/FlightBookigSchema");

const getFlightsBookingByUserId = (req, res) => {
    const userId = req.body.params;
    flightBookingModle.find({ userId })
        .populate("User").populate("Flight")
        .exec()
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: `ther is No flight booking for the user`,
                });
            } else {

                return res.status(200).json(
                    {
                        success: true,
                        message: `this is all flights booking for the user`,
                        flights: result

                    }

                )
            }
        })
};
const creatFlightBooking = (req, res) => {
    const { flightId, userId } = req.body;
    const newBooking = new flightBookingModle({
        flightId,
        userId
    })
        .save()
        .then((result) => {
            console.log(result);

            res.status(201)
            res.json({ success: true, message: "new booking created" })

        })
        .catch((err) => {
            res.status(500);
            console.log(err.message)
            res.json("server error");
        });
};





const deleteFlightBooking = (req, res) => { }


module.exports = { creatFlightBooking, getFlightsBookingByUserId, deleteFlightBooking }