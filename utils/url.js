'use strict';

const Url = require('url-parse');

const url = new Url('https://api.apis.guru/v2/metrics.json');

console.log(url);