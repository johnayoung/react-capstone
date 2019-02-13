'use strict';

const swapi = {
  collectionName: 'Star Wars API',
  baseUrl: 'https://swapi.co/api',
  description: 'The Star Wars API is the world\'s first quantified and programmatically-formatted set of Star Wars data.',
  endpointNames: {
    'people': 'https://swapi.co/api/people/', 
    'planets': 'https://swapi.co/api/planets/', 
    'films': 'https://swapi.co/api/films/', 
    'species': 'https://swapi.co/api/species/', 
    'vehicles': 'https://swapi.co/api/vehicles/', 
    'starships': 'https://swapi.co/api/starships/'
  },
  endpoints: [
    {
      name: 'People',
      description: 'A person within the Star Wars universe',
      path: '/people',
      pathParams: [
        {
          name: 'id', 
          type: 'number', 
          default: 1, 
          description: 'Get a specific people resource',
          possibleValues: ''
        }
      ],
      queryParams: [
        {
          name: 'page', 
          type: 'string', 
          default: '1', 
          description: 'Get a specific people resource by page'
        },
        {
          name: 'search',
          type: 'string',
          default: '',
          description: 'All resources support a search parameter that filters the set of resources returned.'
        }
      ],
      properties: {
        starships: {
          type: 'array',
          description: 'An array of starship resources that this person has piloted'
        },
        edited: {
          type: 'string',
          description: 'the ISO 8601 date format of the time that this resource was edited.',
          format: 'date-time'
        },
        name: {
          type: 'string',
          description: 'The name of this person.'
        },
        created: {
          type: 'string',
          description: 'The ISO 8601 date format of the time that this resource was created.',
          format: 'date-time'
        },
        url: {
          type: 'string',
          description: 'The url of this resource',
          format: 'uri'
        },
        gender: {
          type: 'string',
          description: 'The gender of this person (if known).'
        },
        vehicles: {
          type: 'array',
          description: 'An array of vehicle resources that this person has piloted'
        },
        skin_color: {
          type: 'string',
          description: 'The skin color of this person.'
        },
        hair_color: {
          type: 'string',
          description: 'The hair color of this person.'
        },
        height: {
          type: 'string',
          description: 'The height of this person in meters.'
        },
        eye_color: {
          type: 'string',
          description: 'The eye color of this person.'
        },
        mass: {
          type: 'string',
          description: 'The mass of this person in kilograms.'
        },
        films: {
          type: 'array',
          description: 'An array of urls of film resources that this person has been in.'
        },
        species: {
          type: 'array',
          description: 'The url of the species resource that this person is.'
        },
        homeworld: {
          type: 'string',
          description: 'The url of the planet resource that this person was born on.'
        },
        birth_year: {
          type: 'string',
          description: 'The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin).'
        }
      }
    },
  ]

};

module.exports = swapi;