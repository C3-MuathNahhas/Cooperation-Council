const flightBookingModle = require("../../../db/models/FlightBookigSchema");
const newFlightModel = require("../../../db/models/flightSchema")


const isBookingExist = (req, res, next) => {
    const { bookingId } = req.params;

    flightBookingModle.findOne({ _id: bookingId }).then((result) => {
        if (!result) {
            return res.status(404).json({
                success: false,
                message: `there is No flight booking with this id`
            });
        } else { next() }
    }).catch((err) => {
        res.status(404).json({
            success: false,
            message: `there is No flight booking with this id`
        })
    })






    // if (req.params.bookingId) { next() }
    // else {
    //     next(new Error('the booking is not found'))
    // }
}
const updateFlightAdults = (bookingId, process, adults) => {


    let isExist =
        newFlightModel
            .find({ _id: bookingId })

            .then((result) => {
                if (result)
                    next()
                else return false

            })
            .catch((err) => {
                return err.message
            });


    console.log('isExist : : : ', isExist);

    return isExist;

    // newFlightModel.findByIdAndUpdate(bookingId, {
    //     adults


    // }, { new: true }).then((result) => {
    //     if (!result) {
    //         return res.status(404).json({
    //             success: false,
    //             message: `The Booking => ${bookingId} not found`,
    //         });
    //     }
    //     res.status(200).json({
    //         success: true,
    //         message: `Success update Booking with id => ${bookingId}`,
    //         newBooking: result
    //     });
    // })
    //     .catch((err) => {
    //         res.status(500).json({
    //             success: false,
    //             message: `Server Error`,
    //         });
    //     });






}



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
const updateFlightBooking = async function (req, res) {
    const { bookingId } = req.params;
    const { adults } = req.body
    flightBookingModle.findByIdAndUpdate(bookingId, { adults }, { new: true }).then((result) => {
        if (!result) {
            return res.status(404).json({
                success: false,
                message: `The Booking => ${bookingId} not found`,
            });
        } else {


            //let a = updateFlightAdults(bookingId);
            res.status(200).json('thanks')
            // res.status(200).json({
            //     success: true,
            //     message: `Success update Booking with id => ${bookingId}`,
            //     newBooking: result
            // });
        }

    })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: `Server Error`,
            });
        });

}


errorMiddle = (err, req, res, next) => {
    res.status(err.status);
    res.json({
        error: {
            status: err.status,
            message: err.message,
        }
    })
}

module.exports = {
    creatFlightBooking, getFlightsBookingByUserId,
    deleteFlightBooking, getAllFlightsBooking, updateFlightBooking, isBookingExist
}