'use strict';
// Require is a node only piece. Remove this if you are pulling from client side
const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://api.apis.guru/v2/list.json',
  //   headers: {'Apikey': CRYPTOCOMPARE_API_KEY},
  headers: {
    'Content-Type': 'application/json'
  }
};

axios(config)
  .then(response => {
    const apis = response.data;
    console.log(Object.keys(apis));
  })
  .catch(err => {
    console.log('something went wrong');
  });