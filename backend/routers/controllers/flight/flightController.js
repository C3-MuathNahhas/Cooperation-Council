const flightModel = require("../../../db/models/flightSchema");

const createNewFlight = (req, res) => {
  const { distination, origin, date } = req.body;
  const newFlight = new flightModel({
    distination,
    origin,
    date,
    capacity: 5
  })
  newFlight.save()
    .then((result) => {
      console.log(result);
      res.status(201);
      res.json({ success: true, message: "new flight  created" });
    })
    .catch((err) => {
      res.status(500);
      res.json("server error");
    });
};
// search
const getFlights = (req, res) => {
  const { origin, distination } = req.body

  let test_data = {
    status: "success",
    from: origin,
    to: distination,
    currency: "AED",
    date: "11-26-2021",

  }}


  // هدا راح يتناد لما بدنا نشيك flight in storage
  //getflightbyid
  //run by inner storage

  module.exports = { createNewFlight, getFlights }