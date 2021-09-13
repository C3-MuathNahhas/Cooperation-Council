import React from "react";

const Contact = () => {
  return (
    <div className="mainContact">
      <div className="contact">
      <h1>Contact Us</h1>
        <div className="img_1">
          <img src="https://media.istockphoto.com/photos/flight-attendant-showing-the-emergency-exit-in-an-airplane-picture-id1028463082?k=20&m=1028463082&s=612x612&w=0&h=U-aNIdv9GhclASjewqlXSfTaELmq0nIUyjJ6APR4IR8=" />
        </div>

        
        <h2>Guest services</h2>

        <h2>
         
          <img src="https://www.flymango.com/upload/contacts/call-center.png" />{" "}
          Mango Call Centre:
        </h2>
        <p> Jordan : 786 560 1234 </p>
        <p> International : JoB: +2666 022 6154 </p>
        <p className="email"> Enquiries : traveleo@booking.com </p>

        <h2>
          <img src="https://www.flymango.com/upload/contacts/guest-care.png" />
          Mango Guest Care:
        </h2>
        <p> Jordan :786 560 1234 </p>
        <p className="email">Enquiries : guest@traveleo.com</p>


      </div>
    </div>
  );
};
export default Contact;
