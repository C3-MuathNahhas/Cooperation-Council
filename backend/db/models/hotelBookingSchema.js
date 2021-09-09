const mongoose=require("mongoose")

const hotelBookingSchema=new mongoose.Schema({
    location:{type:String},
    capacity:{type:Number},
    rooms:{type:Number},
    nights:{type:Number},
    adults:{type:Number},
    
    hotelId: {type:mongoose.Schema.Types.ObjectId,ref:"Hotel" , required: true},
    /*
    UsertId: {type:mongoose.Schema.Types.ObjectId,ref:"User", required: true,}
    */
   
})
module.exports= mongoose.model("HotelBooking",hotelBookingSchema)