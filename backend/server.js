const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const flightRouter=require("./routers/routes/flight")
const signUpRouter=require("./routers/routes/auth/signUp")
const loginRouter=require("./routers/routes/auth/login")
const flightRouter=require("./routers/routes/flight")

const app = express();
const hotelBookingRouter = require("./routers/routes/hotelBooking/hotelBooking");
const hotelRouter = require("./routers/routes/hotel/hotel");
const flightBookingRouter = require("./routers/routes/flightBooking/flightBooking")
//routers

//built-in middleware
app.use(express.json());

//third-party middleware
app.use(cors());


//app routers

app.use("/signUp",signUpRouter)
app.use("/login",loginRouter)
app.use("/flights",flightRouter)

app.use("/flightBooking", flightBookingRouter)
app.use("/hotelBooking", hotelBookingRouter);
app.use("/hotel", hotelRouter);
app.use("/signUp", signUpRouter);
app.use("/login", loginRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
