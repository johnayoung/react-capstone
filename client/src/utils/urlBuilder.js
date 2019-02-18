import buildUrl from '../../node_modules/build-url/dist/build-url';
import pathToRegexp from '../../node_modules/path-to-regexp/index';

const urlBuilder = values => {
  const { baseUrl, path, parameters } = values;

  // First we must build out the path parameters
  const pathParameters = parameters
    .filter(param => param.in === 'path')
    .reduce((prev, param) => {
      const paramName = param.name;
      const paramValue = param.default;
      prev[paramName] = paramValue;
      return prev;
    }, {});
  const toPath = pathToRegexp.compile(path);
  const buildPath = toPath(pathParameters);

  // Next we must build out the query parameters
  const queryParameters = parameters
    .filter(param => param.in === 'query')
    .reduce((prev, param) => {
      const paramName = param.name;
      const paramValue = param.default;
      prev[paramName] = paramValue;
      return prev;
    }, {});
  return buildUrl(baseUrl, { path: buildPath, queryParams: queryParameters });
};

// const swapiEndpoint = {
//   name: 'People',
//   description: 'A person within the Star Wars universe',
//   baseUrl: 'https://swapi.co/api',
//   userId: '333333333333333333333300',
//   path: '/people/:id',
//   parameters: [
//     {
//       name: 'id',
//       in: 'path',
//       type: 'number',
//       default: 1,
//       description: 'Get a specific people resource',
//       schema: {
//         enum: ''
//       }
//     },
//     {
//       name: 'page',
//       in: 'query',
//       type: 'string',
//       default: '1',
//       description: 'Get a specific people resource by page',
//       schema: {
//         enum: ''
//       }
//     },
//     {
//       name: 'search',
//       in: 'query',
//       type: 'string',
//       default: '',
//       description:
//         'All resources support a search parameter that filters the set of resources returned.',
//       schema: {
//         enum: ''
//       }
//     }
//   ],
//   properties: {
//     starships: {
//       type: 'array',
//       description: 'An array of starship resources that this person has piloted'
//     },
//     edited: {
//       type: 'string',
//       description: 'the ISO 8601 date format of the time that this resource was edited.',
//       format: 'date-time'
//     },
//     name: {
//       type: 'string',
//       description: 'The name of this person.'
//     },
//     created: {
//       type: 'string',
//       description: 'The ISO 8601 date format of the time that this resource was created.',
//       format: 'date-time'
//     },
//     url: {
//       type: 'string',
//       description: 'The url of this resource',
//       format: 'uri'
//     },
//     gender: {
//       type: 'string',
//       description: 'The gender of this person (if known).'
//     },
//     vehicles: {
//       type: 'array',
//       description: 'An array of vehicle resources that this person has piloted'
//     },
//     skin_color: {
//       type: 'string',
//       description: 'The skin color of this person.'
//     },
//     hair_color: {
//       type: 'string',
//       description: 'The hair color of this person.'
//     },
//     height: {
//       type: 'string',
//       description: 'The height of this person in meters.'
//     },
//     eye_color: {
//       type: 'string',
//       description: 'The eye color of this person.'
//     },
//     mass: {
//       type: 'string',
//       description: 'The mass of this person in kilograms.'
//     },
//     films: {
//       type: 'array',
//       description: 'An array of urls of film resources that this person has been in.'
//     },
//     species: {
//       type: 'array',
//       description: 'The url of the species resource that this person is.'
//     },
//     homeworld: {
//       type: 'string',
//       description: 'The url of the planet resource that this person was born on.'
//     },
//     birth_year: {
//       type: 'string',
//       description:
//         'The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin).'
//     }
//   }
// };

// const pathParameters = [];
// const re = pathToRegexp('/stock/:stock/chart/:time', pathParameters);
// const toPath = pathToRegexp.compile('/stock/:stock/chart/:time');

export default urlBuilder; //
