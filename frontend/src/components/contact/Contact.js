import React from "react";
import "../contact/Contact.css"
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
          traveleo Call Centre:
        </h2>
        <p> Jordan : 786 560 1234 </p>
        <p> International : JoB: +2666 022 6154 </p>
        <p className="email"> Enquiries : traveleo@booking.com </p>

        <h2>
          <img src="https://www.flymango.com/upload/contacts/guest-care.png" />
          traveleo Guest Care:
        </h2>
        <p> Jordan :786 560 1234 </p>
        <p className="email">Enquiries : guest@traveleo.com</p>
        <h2>
          <img src="https://www.flymango.com/upload/contacts/group.png" />{" "}
          traveleo Group Bookings:
        </h2>
        <p>Jordan :786 560 1234</p>
        <p className="email">Enquiries :guestgroup@traveleo.com</p>
        <h2>
          <img src="https://www.flymango.com/upload/contacts/corporate.png" />
          traveleo Corporate Help Desk:
        </h2>
        <p>Jordan :786 560 1234</p>

        <h2>
          <img src="https://www.flymango.com/upload/contacts/flight-schedule.png" />
          traveleo Flight Schedule Changes:
        </h2>
        <p>Jordan :786 560 1234</p>

        <h2>
          <img src="https://www.flymango.com/upload/contacts/refunds.png" />
          traveleo Refunds:
        </h2>

        <p>Jordan :786 560 1234</p>
        <p className="email">guestRefunds@traveleo.com</p>

        <h2>
          <img
            className="bag"
            src="https://www.flymango.com/upload/contacts/Mango%20-%20Baggage%20Icon-01.png"
          />
          traveleo National Baggage Line:
        </h2>
        <p>Jordan :786 560 1234</p>
      </div>
      <hr className="hr" />
      <div className="midlleContact">
        <h2>Head office</h2>
        <div className="img_2">
          <img src="https://www.flymango.com/upload/Responsive/Content/Other%20Images/i_TMS_1.jpg" />
        </div>
        <h3>
          <img src="https://www.flymango.com/upload/contacts/phone.png" />
          traveleo Reception:
        </h3>
        <p>Jordan :786 560 1234</p>
        <h3>
          <img src="https://www.flymango.com/upload/contacts/address.png" />
          Physical Address
        </h3>
        <p>
          Mezzanine LevelDomestic Departure TerminalOR alia International
          Airport1627
        </p>
        <h3>
          <img src="https://www.flymango.com/upload/contacts/postal.png" />
          Postal Address:
        </h3>
        <p> P.O. Box 5553 OR AliaInternational Airport 1627 </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="contactFooter">
        <h3>BEE certificate</h3>
        <h3>cookie policy</h3>
        <h3>Travel communities</h3>
        <h3>Unique places to stay</h3>
      </div>
    </div>
  );
};
export default Contact;