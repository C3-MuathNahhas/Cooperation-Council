const axios = require('axios');
const hotelModle = require("../../../db/models/hotelsSchema");
//example 
//  const location_id = '293986';
//  const adults = '1';
//  const rooms = '1';
const locations = {
  '293986': 'AMM'
}

const getHotels = (req, res) => {
  const { location_id, adults, rooms, nights } = req.body



  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/hotels/list',
    params: {
      location_id: location_id,
      adults: adults,
      rooms: rooms,
      nights: nights,
      offset: '0',
      currency: 'USD',
      order: 'asc',
      limit: '5',
      sort: 'recommended',
      lang: 'en_US'
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '58acba7360mshb865bc54c5c483ep1ea6bejsn435d6ed0119c'
    }
  };
  const hotels = [];

  axios.request(options).then(function (response) {

    for (const key in response.data.data) {
      const element = {
        name: response.data.data[key]['name'],
        location_id: response.data.data[key]['location_id'],
        photo: response.data.data[key]['photo']['images']["original"]['url'],
        price: response.data.data[key]['price'].split(' ')[0].split('$')[1] - 0
      };
      hotels.push(element)
    }

    res.status(201).json({
      success: true,
      message: 'get hotels successfully',
      hotels: hotels
    })

  }).catch(function (error) {
    console.log(error.message)
    res.status(500).json({
      success: false,
      message: 'not availability'
    })

  });



}



module.exports = {
  getHotels,
};
