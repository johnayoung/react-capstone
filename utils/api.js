'use strict';
// Require is a node only piece. Remove this if you are pulling from client side
const axios = require('axios');
const fs = require('fs');
const Papa = require('papaparse');

// CSV from file
let csv = fs.createReadStream('./utils/movies.csv');
const c = fs.readFileSync('./utils/movies.csv', 'utf8');

// JSON
const json = [{
  'name': 'Luke Skywalker',
  'height': '172',
  'mass': '77',
  'hair_color': 'blond',
  'skin_color': 'fair',
  'eye_color': 'blue',
  'birth_year': '19BBY',
  'gender': 'male',
  'homeworld': 'https://swapi.co/api/planets/1/',
  'films': [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/',
    'https://swapi.co/api/films/7/'
  ],
  'species': [
    'https://swapi.co/api/species/1/'
  ],
  'vehicles': [
    'https://swapi.co/api/vehicles/14/',
    'https://swapi.co/api/vehicles/30/'
  ],
  'starships': [
    'https://swapi.co/api/starships/12/',
    'https://swapi.co/api/starships/22/'
  ],
  'created': '2014-12-09T13:50:51.644000Z',
  'edited': '2014-12-20T21:17:56.891000Z',
  'url': 'https://swapi.co/api/people/1/'
}];
const j = fs.readFileSync('./utils/swapi.json', 'utf8');

const data = Papa.unparse(json);

console.log(data);

// const config = {
//   method: 'get',
//   url: 'https://api.apis.guru/v2/list.json',
//   //   headers: {'Apikey': CRYPTOCOMPARE_API_KEY},
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

// axios(config)
//   .then(response => {
//     const apis = response.data;
//     console.log(Object.keys(apis));
//   })
//   .catch(err => {
//     console.log('something went wrong');
//   });