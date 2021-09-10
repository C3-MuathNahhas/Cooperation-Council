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
                    message: `there is No flight booking for the user`,
                });
            } else {

                return res.status(200).json(
                    {
                        success: true,
                        message: `all flights bookings for the user`,
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

const getAllFlightsBooking = (req, res) => {

    flightBookingModle.find({})
        .populate("userId", '-_id -password -email -__v').populate("flightId", '-_id -__v')
        .exec()
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: `there is no flight booking for any user yet`,
                });
            } else {

                return res.status(200).json(
                    {
                        success: true,
                        message: `all flights bookings for all users`,
                        flightsBookings: result

                    }

                )
            }
        })
};

const deleteFlightBooking = (req, res) => {
    const { bookingId } = req.params;
    flightBookingModle.findByIdAndDelete(bookingId).then((result) => {
        if (!result) {
            return res.status(404).json({
                success: false,
                message: `The Booking => ${bookingId} not found`,
            });
        }
        res.status(200).json({
            success: true,
            message: `Success Delete Booking with id => ${bookingId}`,
        });
    })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: `Server Error`,
            });
        });

}
const updateFlightBooking = (req, res) => {
    const { bookingId } = req.params;
    flightBookingModle.findByIdAndUpdate(bookingId,{capacity:4},{ new: true }).then((result) => {
        if (!result) {
            return res.status(404).json({
                success: false,
                message: `The Booking => ${bookingId} not found`,
            });
        }
        res.status(200).json({
            success: true,
            message: `Success Delete Booking with id => ${bookingId}`,
        });
    })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: `Server Error`,
            });
        });

}


module.exports = { creatFlightBooking, getFlightsBookingByUserId, deleteFlightBooking, getAllFlightsBooking }