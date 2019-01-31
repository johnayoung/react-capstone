'use strict';

const endpoints = [
  {
    '_id': '000000000000000000000000',
    'name': 'Chart',
    'description': 'Historically adjusted market-wide data',
    'fullUrl': 'https://api.iextrading.com/1.0/stock/aapl/chart/5y?chartReset=true'
  },
  {
    '_id': '000000000000000000000001',
    'name': 'Chart',
    'description': 'Response includes data from deep and quote. Refer to each endpoint for details.',
    'fullUrl': 'https://api.iextrading.com/1.0/stock/aapl/book'
  }
];

module.exports = {
  endpoints
};