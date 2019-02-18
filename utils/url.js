'use strict';

const Url = require('url-parse');

const url = new Url('https://api.apis.guru/v2/metrics.json');
const urlWithParams = new Url('https://api.iextrading.com/1.0/stock/aapl/chart/1d?chartReset=true&chartSimplify=true');

console.log(urlWithParams);