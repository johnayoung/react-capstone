'use strict';
// Require is a node only piece. Remove this if you are pulling from client side
const axios = require('axios');
// const {CRYPTOCOMPARE_API_KEY} = require('../config');

const base = {
  method: 'get',
  //   baseURL: 'https://min-api.cryptocompare.com/data',
  //   headers: {'Apikey': CRYPTOCOMPARE_API_KEY},
  responseType: 'json',
};

const api = {
  get: function(baseSettings=base, requestObj) {
    baseSettings.url = '/price';
    return axios(baseSettings);
  }
};

module.exports = {
  get: api.get
};