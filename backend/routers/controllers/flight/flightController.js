const flightModel = require("../../../db/models/flightSchema");

const createNewFlight = (req, res) => {
  const { distination, origin, date } = req.body;
  const newFlight = new flightModel({
    distination,
    origin,
    date,
    capacity: 5,
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
 const { origin, distination } = req.body;
 
  let test_data = {
    status: "success",
    from: origin,
    to: distination,
    currency: "AED",
    date: "11-26-2021",
    
    data: [
      {
        flight_name: "Flydubai",
        stops: "Direct",
        price: {
          total: 1155,
        },
      },
      {
        flight_name: "Air Arabia",
        stops: "Direct",
        price: {
          total: 1238,
        },
      },
      {
        flight_name: "Etihad Airways",
        stops: "1 Stop",
        price: {
          total: 830,
          base: 580,
          tax: 250,
          refundable: false,
        },
      },
      {
        flight_name: "Gulf Air",
        stops: "1 Stop",
        price: {
          total: 915,
          base: 470,
          tax: 445,
          refundable: false,
        },
      },
      {
        flight_name: "Gulf Air",
        stops: "1 Stop",
        price: {
          total: 985,
          base: 540,
          tax: 445,
          refundable: false,
        },
      },
      {
        flight_name: "Kuwait Airways",
        stops: "1 Stop",
        price: {
          total: 1110,
          base: 830,
          tax: 280,
          refundable: true,
        },
      },
      {
        flight_name: "Qatar Airways",
        stops: "1 Stop",
        price: {
          total: 1130,
          base: 850,
          tax: 280,
          refundable: true,
        },
      },
      {
        flight_name: "Qatar Airways",
        stops: "1 Stop",
        price: {
          total: 1140,
          base: 850,
          tax: 290,
          refundable: true,
        },
      },
      {
        flight_name: "Oman Air",
        stops: "1 Stop",
        price: {
          total: 1220,
          base: 960,
          tax: 260,
          refundable: false,
        },
      },
      {
        flight_name: "Middle East Airlines",
        stops: "1 Stop",
        price: {
          total: 1230,
          base: 710,
          tax: 520,
          refundable: true,
        },
      },
      {
        flight_name: "Royal Jordanian",
        stops: "Direct",
        price: {
          total: 1240,
          base: 850,
          tax: 390,
          refundable: false,
        },
      },
      {
        flight_name: "Middle East Airlines",
        stops: "1 Stop",
        price: {
          total: 1250,
          base: 730,
          tax: 520,
          refundable: true,
        },
      },
      {
        flight_name: "Emirates",
        stops: "Direct",
        price: {
          total: 1290,
          base: 1040,
          tax: 250,
          refundable: true,
        },
      },
      {
        flight_name: "Egyptair",
        stops: "1 Stop",
        price: {
          total: 1320,
          base: 480,
          tax: 840,
          refundable: true,
        },
      },
      {
        flight_name: "Egyptair",
        stops: "1 Stop",
        price: {
          total: 1330,
          base: 480,
          tax: 850,
          refundable: true,
        },
      },
      {
        flight_name: "Egyptair",
        stops: "1 Stop",
        price: {
          total: 1340,
          base: 480,
          tax: 860,
          refundable: true,
        },
      },
      {
        flight_name: "Kuwait Airways",
        stops: "1 Stop",
        price: {
          total: 1480,
          base: 1200,
          tax: 280,
          refundable: true,
        },
      },
      {
        flight_name: "Emirates",
        stops: "1 Stop",
        price: {
          total: 1490,
          base: 1200,
          tax: 290,
          refundable: true,
        },
      },
      {
        flight_name: "Etihad Airways",
        stops: "1 Stop",
        price: {
          total: 1710,
          base: 1460,
          tax: 250,
          refundable: true,
        },
      },
      {
        flight_name: "Turkish Airlines",
        stops: "1 Stop",
        price: {
          total: 1860,
          base: 1270,
          tax: 590,
          refundable: true,
        },
      },
      {
        flight_name: "Turkish Airlines",
        stops: "1 Stop",
        price: {
          total: 1940,
          base: 1270,
          tax: 670,
          refundable: true,
        },
      },
      {
        flight_name: "Saudia",
        stops: "1 Stop",
        price: {
          total: 4450,
          base: 3990,
          tax: 460,
          refundable: true,
        },
      },
      {
        flight_name: "Saudia",
        stops: "1 Stop",
        price: {
          total: 4560,
          base: 4100,
          tax: 460,
          refundable: true,
        },
      },
      {
        flight_name: "Emirates",
        stops: "1 Stop",
        price: {
          total: 5380,
          base: 5110,
          tax: 270,
          refundable: true,
        },
      },
      {
        flight_name: "Emirates",
        stops: "1 Stop",
        price: {
          total: 5410,
          base: 5110,
          tax: 300,
          refundable: true,
        },
      },
      {
        flight_name: "Emirates",
        stops: "1 Stop",
        price: {
          total: 5560,
          base: 5110,
          tax: 450,
          refundable: true,
        },
      },
      {
        flight_name: "British Airways",
        stops: "1 Stop",
        price: {
          total: 6330,
          base: 5450,
          tax: 880,
          refundable: false,
        },
      },
      {
        flight_name: "Emirates",
        stops: "1 Stop",
        price: {
          total: 6420,
          base: 6140,
          tax: 280,
          refundable: true,
        },
      },
      {
        flight_name: "Emirates",
        stops: "1 Stop",
        price: {
          total: 6590,
          base: 6140,
          tax: 450,
          refundable: true,
        },
      },
      {
        flight_name: "Lufthansa",
        stops: "1 Stop",
        price: {
          total: 10830,
          base: 9580,
          tax: 1250,
          refundable: false,
        },
      },
      ,
      {
        status: "success",
        from: origin,
        to: distination,
        currency: "AED",
        date: "11-26-2021",
        data: [
          {
            flight_name: "Flydubai",
            stops: "Direct",
            price: {
              total: 1155,
            },
          },
          {
            flight_name: "Air Arabia",
            stops: "Direct",
            price: {
              total: 1238,
            },
          },
          {
            flight_name: "Etihad Airways",
            stops: "1 Stop",
            price: {
              total: 830,
              base: 580,
              tax: 250,
              refundable: false,
            },
          },
          {
            flight_name: "Gulf Air",
            stops: "1 Stop",
            price: {
              total: 915,
              base: 470,
              tax: 445,
              refundable: false,
            },
          },
          {
            flight_name: "Gulf Air",
            stops: "1 Stop",
            price: {
              total: 985,
              base: 540,
              tax: 445,
              refundable: false,
            },
          },
          {
            flight_name: "Kuwait Airways",
            stops: "1 Stop",
            price: {
              total: 1110,
              base: 830,
              tax: 280,
              refundable: true,
            },
          },
          {
            flight_name: "Qatar Airways",
            stops: "1 Stop",
            price: {
              total: 1130,
              base: 850,
              tax: 280,
              refundable: true,
            },
          },
          {
            flight_name: "Qatar Airways",
            stops: "1 Stop",
            price: {
              total: 1140,
              base: 850,
              tax: 290,
              refundable: true,
            },
          },
          {
            flight_name: "Oman Air",
            stops: "1 Stop",
            price: {
              total: 1220,
              base: 960,
              tax: 260,
              refundable: false,
            },
          },
          {
            flight_name: "Middle East Airlines",
            stops: "1 Stop",
            price: {
              total: 1230,
              base: 710,
              tax: 520,
              refundable: true,
            },
          },
          {
            flight_name: "Royal Jordanian",
            stops: "Direct",
            price: {
              total: 1240,
              base: 850,
              tax: 390,
              refundable: false,
            },
          },
          {
            flight_name: "Middle East Airlines",
            stops: "1 Stop",
            price: {
              total: 1250,
              base: 730,
              tax: 520,
              refundable: true,
            },
          },
          {
            flight_name: "Emirates",
            stops: "Direct",
            price: {
              total: 1290,
              base: 1040,
              tax: 250,
              refundable: true,
            },
          },
          {
            flight_name: "Egyptair",
            stops: "1 Stop",
            price: {
              total: 1320,
              base: 480,
              tax: 840,
              refundable: true,
            },
          },
          {
            flight_name: "Egyptair",
            stops: "1 Stop",
            price: {
              total: 1330,
              base: 480,
              tax: 850,
              refundable: true,
            },
          },
          {
            flight_name: "Egyptair",
            stops: "1 Stop",
            price: {
              total: 1340,
              base: 480,
              tax: 860,
              refundable: true,
            },
          },
          {
            flight_name: "Kuwait Airways",
            stops: "1 Stop",
            price: {
              total: 1480,
              base: 1200,
              tax: 280,
              refundable: true,
            },
          },
          {
            flight_name: "Emirates",
            stops: "1 Stop",
            price: {
              total: 1490,
              base: 1200,
              tax: 290,
              refundable: true,
            },
          },
          {
            flight_name: "Etihad Airways",
            stops: "1 Stop",
            price: {
              total: 1710,
              base: 1460,
              tax: 250,
              refundable: true,
            },
          },
          {
            flight_name: "Turkish Airlines",
            stops: "1 Stop",
            price: {
              total: 1860,
              base: 1270,
              tax: 590,
              refundable: true,
            },
          },
          {
            flight_name: "Turkish Airlines",
            stops: "1 Stop",
            price: {
              total: 1940,
              base: 1270,
              tax: 670,
              refundable: true,
            },
          },
          {
            flight_name: "Saudia",
            stops: "1 Stop",
            price: {
              total: 4450,
              base: 3990,
              tax: 460,
              refundable: true,
            },
          },
          {
            flight_name: "Saudia",
            stops: "1 Stop",
            price: {
              total: 4560,
              base: 4100,
              tax: 460,
              refundable: true,
            },
          },
          {
            flight_name: "Emirates",
            stops: "1 Stop",
            price: {
              total: 5380,
              base: 5110,
              tax: 270,
              refundable: true,
            },
          },
          {
            flight_name: "Emirates",
            stops: "1 Stop",
            price: {
              total: 5410,
              base: 5110,
              tax: 300,
              refundable: true,
            },
          },
          {
            flight_name: "Emirates",
            stops: "1 Stop",
            price: {
              total: 5560,
              base: 5110,
              tax: 450,
              refundable: true,
            },
          },
          {
            flight_name: "British Airways",
            stops: "1 Stop",
            price: {
              total: 6330,
              base: 5450,
              tax: 880,
              refundable: false,
            },
          },
          {
            flight_name: "Emirates",
            stops: "1 Stop",
            price: {
              total: 6420,
              base: 6140,
              tax: 280,
              refundable: true,
            },
          },
          {
            flight_name: "Emirates",
            stops: "1 Stop",
            price: {
              total: 6590,
              base: 6140,
              tax: 450,
              refundable: true,
            },
          },
          {
            flight_name: "Lufthansa",
            stops: "1 Stop",
            price: {
              total: 10830,
              base: 9580,
              tax: 1250,
              refundable: false,
            },
          },
        ],
        
      },
    ],
    
    
  };
  
};

// هدا راح يتناد لما بدنا نشيك flight in storage
//getflightbyid
//run by inner storage

module.exports = { createNewFlight, getFlights };
