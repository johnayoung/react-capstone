// Can flatten any json response;
// function flatten(data) {
//   const result = {};
//   function recurse(cur, prop) {
//     if (Object(cur) !== cur) {
//       result[prop] = cur;
//     } else if (Array.isArray(cur)) {
//       for (var i = 0, l = cur.length; i < l; i++) recurse(cur[i], `${prop}[${i}]`);
//       if (l == 0) result[prop] = [];
//     } else {
//       let isEmpty = true;
//       for (const p in cur) {
//         isEmpty = false;
//         recurse(cur[p], prop ? `${prop}.${p}` : p);
//       }
//       if (isEmpty && prop) result[prop] = {};
//     }
//   }
//   recurse(data, '');
//   return result;
// }

// Actual parse function
export const parseObject = (obj, path) => {
  if (path == undefined) {
    path = '';
  }
  const type = typeof obj;
  const scalar = type == 'number' || type == 'string' || type == 'boolean' || type == 'null';

  if (Array.isArray(obj) || type == 'object') {
    const d = {};
    for (const i in obj) {
      const newD = parseObject(obj[i], `${path + i}/`);
      Object.assign(d, newD);
    }
    return d;
  }
  if (scalar) {
    const d = {};
    const endPath = path.substr(0, path.length - 1);
    d[endPath] = obj;
    return d;
  }

  return {};
};

// Otherwise, find the first
export const arrayFrom = json => {
  const queue = [];
  let next = json;

  while (next !== undefined) {
    if (Array.isArray(next)) {
      if (next.length > 0) {
        const type = typeof next[0];
        const scalar = type == 'number' || type == 'string' || type == 'boolean' || type == 'null';

        if (!scalar) {
          return next;
        }
      }
    }
    // If item is an object, push the keys into queue
    if (typeof next === 'object') {
      for (const key in next) {
        queue.push(next[key]);
      }
    }
    next = queue.shift();
  }
  // nothing found, consider the whole object a row
  return [json];
};

// 1. Find the primary array to iterate over
// 2. For each item in the array, recursively flatten it into tabular object
// 3. Turn tabular object into a csv row (use a library for this)
export const doCSV = json => {
  const inArray = arrayFrom(json);

  const outArray = [];
  for (const row in inArray) {
    outArray[outArray.length] = parseObject(inArray[row]);
  }

  return outArray;
};

const swapidata = {
  count: 87,
  next: 'https://swapi.co/api/people/?page=2',
  previous: null,
  results: [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: ['https://swapi.co/api/vehicles/14/', 'https://swapi.co/api/vehicles/30/'],
      starships: ['https://swapi.co/api/starships/12/', 'https://swapi.co/api/starships/22/'],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.co/api/people/1/'
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
      skin_color: 'gold',
      eye_color: 'yellow',
      birth_year: '112BBY',
      gender: 'n/a',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
      ],
      species: ['https://swapi.co/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:10:51.357000Z',
      edited: '2014-12-20T21:17:50.309000Z',
      url: 'https://swapi.co/api/people/2/'
    },
    {
      name: 'R2-D2',
      height: '96',
      mass: '32',
      hair_color: 'n/a',
      skin_color: 'white, blue',
      eye_color: 'red',
      birth_year: '33BBY',
      gender: 'n/a',
      homeworld: 'https://swapi.co/api/planets/8/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
      ],
      species: ['https://swapi.co/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:11:50.376000Z',
      edited: '2014-12-20T21:17:50.311000Z',
      url: 'https://swapi.co/api/people/3/'
    },
    {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: [],
      starships: ['https://swapi.co/api/starships/13/'],
      created: '2014-12-10T15:18:20.704000Z',
      edited: '2014-12-20T21:17:50.313000Z',
      url: 'https://swapi.co/api/people/4/'
    },
    {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '19BBY',
      gender: 'female',
      homeworld: 'https://swapi.co/api/planets/2/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: ['https://swapi.co/api/vehicles/30/'],
      starships: [],
      created: '2014-12-10T15:20:09.791000Z',
      edited: '2014-12-20T21:17:50.315000Z',
      url: 'https://swapi.co/api/people/5/'
    },
    {
      name: 'Owen Lars',
      height: '178',
      mass: '120',
      hair_color: 'brown, grey',
      skin_color: 'light',
      eye_color: 'blue',
      birth_year: '52BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/1/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:52:14.024000Z',
      edited: '2014-12-20T21:17:50.317000Z',
      url: 'https://swapi.co/api/people/6/'
    },
    {
      name: 'Beru Whitesun lars',
      height: '165',
      mass: '75',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'blue',
      birth_year: '47BBY',
      gender: 'female',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/1/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:53:41.121000Z',
      edited: '2014-12-20T21:17:50.319000Z',
      url: 'https://swapi.co/api/people/7/'
    },
    {
      name: 'R5-D4',
      height: '97',
      mass: '32',
      hair_color: 'n/a',
      skin_color: 'white, red',
      eye_color: 'red',
      birth_year: 'unknown',
      gender: 'n/a',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: ['https://swapi.co/api/films/1/'],
      species: ['https://swapi.co/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:57:50.959000Z',
      edited: '2014-12-20T21:17:50.321000Z',
      url: 'https://swapi.co/api/people/8/'
    },
    {
      name: 'Biggs Darklighter',
      height: '183',
      mass: '84',
      hair_color: 'black',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '24BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: ['https://swapi.co/api/films/1/'],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: [],
      starships: ['https://swapi.co/api/starships/12/'],
      created: '2014-12-10T15:59:50.509000Z',
      edited: '2014-12-20T21:17:50.323000Z',
      url: 'https://swapi.co/api/people/9/'
    },
    {
      name: 'Obi-Wan Kenobi',
      height: '182',
      mass: '77',
      hair_color: 'auburn, white',
      skin_color: 'fair',
      eye_color: 'blue-gray',
      birth_year: '57BBY',
      gender: 'male',
      homeworld: 'https://swapi.co/api/planets/20/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
      ],
      species: ['https://swapi.co/api/species/1/'],
      vehicles: ['https://swapi.co/api/vehicles/38/'],
      starships: [
        'https://swapi.co/api/starships/48/',
        'https://swapi.co/api/starships/59/',
        'https://swapi.co/api/starships/64/',
        'https://swapi.co/api/starships/65/',
        'https://swapi.co/api/starships/74/'
      ],
      created: '2014-12-10T16:16:29.192000Z',
      edited: '2014-12-20T21:17:50.325000Z',
      url: 'https://swapi.co/api/people/10/'
    }
  ]
};

// console.log(parseObject(swapidata));
console.log(doCSV(swapidata));
// console.log(arrayFrom(swapidata));
export default doCSV;
