const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const signUpRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");
const flightRouter = require("./routers/routes/flight");

const app = express();
const hotelBookingRouter = require("./routers/routes/hotelBooking");
const hotelRouter = require("./routers/routes/hotle");

//routers

//built-in middleware
app.use(express.json());

//third-party middleware
app.use(cors());

app.use("/hotelBooking", hotelBookingRouter);
app.use("/hotel", hotelRouter);
//app routers
app.use("/signUp", signUpRouter);
app.use("/login", loginRouter);
app.use("/flight", flightRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
