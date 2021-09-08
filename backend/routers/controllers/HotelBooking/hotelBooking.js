const hotelBookingModel = require("../../../db/models/hotelBookingSchema");

const createHotelBooking = () => {
  const { location, capacity, rooms } = req.body;

  const newHotelBookig=new hotelBookingModel({

    location,
     capacity,
      rooms 
  })
  newHotelBookig.save().
  then((result)=>{
      result.status(201).json({
          succes:true,
          success: 'new hotel booking created'
      })
  })
  .catch((err)=>{})
};
