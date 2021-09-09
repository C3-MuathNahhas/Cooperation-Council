<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const signUpRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");
const flightRouter = require("./routers/routes/flight");

const app = express();
const hotelBookingRouter = require("./routers/routes/hotelBooking");
const hotelRouter = require("./routers/routes/hotle");
=======
const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const signUpRouter = require("./routers/routes/auth/signUp")
const loginRouter = require("./routers/routes/auth/login")

const flightRouter=require("./routers/routes/flight")

const app = express();
const hotelBookingRouter = require("./routers/routes/hotelBooking/hotelBooking");
const hotelRouter = require("./routers/routes/hotel/hotel");
>>>>>>> 73e3e4ed8be08e8eaf4a36c36117dc4304aae213

//const flightBookingRouter = require("./routers/routes/flightBooking/flightBooking")
//routers

//built-in middleware
app.use(express.json());

//third-party middleware
app.use(cors());

<<<<<<< HEAD
app.use("/hotelBooking", hotelBookingRouter);
app.use("/hotel", hotelRouter);
//app routers
app.use("/signUp", signUpRouter);
app.use("/login", loginRouter);
app.use("/flight", flightRouter);
=======

//app routers

app.use("/login",loginRouter)
app.use("/flights",flightRouter)

//app.use("/flightBooking", flightBookingRouter)
app.use("/hotelBooking", hotelBookingRouter);
app.use("/hotel", hotelRouter);
app.use("/signUp", signUpRouter);

>>>>>>> 73e3e4ed8be08e8eaf4a36c36117dc4304aae213

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
