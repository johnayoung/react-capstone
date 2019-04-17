/* eslint-disable no-nested-ternary */
const isObject = val => {
  return val === null
    ? false
    : Array.isArray(val)
    ? false
    : typeof val === 'function' || typeof val === 'object';
};

const isPrim = val => {
  const type = typeof val;
  return !!(type === 'number' || type === 'string' || type === 'boolean' || type == 'null');
};

const isArray = val => {
  return Array.isArray(val);
};

// Find the first array in an object, otherwise turn object into array
const arrayFrom = json => {
  let queue = [];
  let next = json;

  while (next !== undefined) {
    if (isArray(next)) {
      if (next.length > 0) {
        if (!isPrim(next[0])) return next;
      }
    }
    if (isObject(next)) {
      queue = Object.keys(next).reduce((a, cv) => {
        a.push(next[cv]);
        return a;
      }, []);
    }
    next = queue.shift();
  }
  // nothing found, consider the whole object a row
  return [json];
};

const swapidata = {
  status: {
    timestamp: '2019-04-17T18:25:34.548Z',
    error_code: 0,
    error_message: null,
    elapsed: 5,
    credit_count: 1
  },
  data: [
    {
      id: 3866,
      name: 'CONUN',
      symbol: 'CON',
      slug: 'conun',
      circulating_supply: null,
      total_supply: 5000000000,
      max_supply: null,
      date_added: '2019-04-17T00:00:00.000Z',
      num_market_pairs: 3,
      tags: [],
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: ''
      },
      cmc_rank: null,
      last_updated: '2019-04-17T18:25:09.000Z',
      quote: {
        USD: {
          price: 0.0482528919967,
          volume_24h: 0,
          percent_change_1h: null,
          percent_change_24h: null,
          percent_change_7d: null,
          market_cap: 0,
          last_updated: '2019-04-17T18:25:09.000Z'
        }
      }
    },
    {
      id: 3868,
      name: 'SignatureChain ',
      symbol: 'SICA',
      slug: 'signature-chain',
      circulating_supply: null,
      total_supply: 50000000000,
      max_supply: null,
      date_added: '2019-04-17T00:00:00.000Z',
      num_market_pairs: 3,
      tags: [],
      platform: {
        id: 1274,
        name: 'Waves',
        symbol: 'WAVES',
        slug: 'waves',
        token_address: '3Z4SBCZ2LRZLuDweUYJkypmjrWkcLuduxpf3Vj8FddSk'
      },
      cmc_rank: null,
      last_updated: '2019-04-17T18:25:09.000Z',
      quote: {
        USD: {
          price: 0.000013560659213,
          volume_24h: 10614.5419004478,
          percent_change_1h: null,
          percent_change_24h: null,
          percent_change_7d: null,
          market_cap: 0,
          last_updated: '2019-04-17T18:25:09.000Z'
        }
      }
    },
    {
      id: 1839,
      name: 'Binance Coin',
      symbol: 'BNB',
      slug: 'binance-coin',
      circulating_supply: 141175490.242,
      total_supply: 189175490.242,
      max_supply: null,
      date_added: '2017-07-25T00:00:00.000Z',
      num_market_pairs: 148,
      tags: [],
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52'
      },
      cmc_rank: 7,
      last_updated: '2019-04-17T18:25:04.000Z',
      quote: {
        USD: {
          price: 19.5396099426,
          volume_24h: 166891615.596967,
          percent_change_1h: -0.00617364,
          percent_change_24h: -0.366324,
          percent_change_7d: 6.42453,
          market_cap: 2758514012.7840123,
          last_updated: '2019-04-17T18:25:04.000Z'
        }
      }
    },
    {
      id: 825,
      name: 'Tether',
      symbol: 'USDT',
      slug: 'tether',
      circulating_supply: 2475513474.17801,
      total_supply: 2750057493.36343,
      max_supply: null,
      date_added: '2015-02-25T00:00:00.000Z',
      num_market_pairs: 2155,
      tags: [],
      platform: {
        id: 83,
        name: 'Omni',
        symbol: 'OMNI',
        slug: 'omni',
        token_address: '31'
      },
      cmc_rank: 8,
      last_updated: '2019-04-17T18:25:11.000Z',
      quote: {
        USD: {
          price: 1.00678914179,
          volume_24h: 11332253023.2745,
          percent_change_1h: 0.0311329,
          percent_change_24h: -0.173009,
          percent_change_7d: -0.0426602,
          market_cap: 2492320086.15726,
          last_updated: '2019-04-17T18:25:11.000Z'
        }
      }
    },
    {
      id: 1518,
      name: 'Maker',
      symbol: 'MKR',
      slug: 'maker',
      circulating_supply: 1000000,
      total_supply: 1000000,
      max_supply: null,
      date_added: '2017-01-29T00:00:00.000Z',
      num_market_pairs: 63,
      tags: [],
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
      },
      cmc_rank: 20,
      last_updated: '2019-04-17T18:25:02.000Z',
      quote: {
        USD: {
          price: 619.913190099,
          volume_24h: 1120528.55831691,
          percent_change_1h: 0.191596,
          percent_change_24h: -3.59308,
          percent_change_7d: -13.4128,
          market_cap: 619913190.099,
          last_updated: '2019-04-17T18:25:02.000Z'
        }
      }
    },
    {
      id: 3635,
      name: 'Crypto.com Chain',
      symbol: 'CRO',
      slug: 'crypto-com-chain',
      circulating_supply: 5052511415.52512,
      total_supply: 100000000000,
      max_supply: null,
      date_added: '2018-12-14T00:00:00.000Z',
      num_market_pairs: 12,
      tags: [],
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b'
      },
      cmc_rank: 23,
      last_updated: '2019-04-17T18:25:08.000Z',
      quote: {
        USD: {
          price: 0.0847274226252,
          volume_24h: 661812.504687692,
          percent_change_1h: 1.65456,
          percent_change_24h: -0.925283,
          percent_change_7d: 26.3865,
          market_cap: 428086270.0218443,
          last_updated: '2019-04-17T18:25:08.000Z'
        }
      }
    },
    {
      id: 1697,
      name: 'Basic Attention Token',
      symbol: 'BAT',
      slug: 'basic-attention-token',
      circulating_supply: 1249416783.15753,
      total_supply: 1500000000,
      max_supply: null,
      date_added: '2017-06-01T00:00:00.000Z',
      num_market_pairs: 97,
      tags: [],
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: '0x0d8775f648430679a709e98d2b0cb6250d2887ef'
      },
      cmc_rank: 24,
      last_updated: '2019-04-17T18:25:02.000Z',
      quote: {
        USD: {
          price: 0.330503557711,
          volume_24h: 49409827.6710417,
          percent_change_1h: -0.0358619,
          percent_change_24h: 5.01967,
          percent_change_7d: 12.5147,
          market_cap: 412936691.8973967,
          last_updated: '2019-04-17T18:25:02.000Z'
        }
      }
    },
    {
      id: 1808,
      name: 'OmiseGO',
      symbol: 'OMG',
      slug: 'omisego',
      circulating_supply: 140245398.245133,
      total_supply: 140245398.245133,
      max_supply: null,
      date_added: '2017-07-14T00:00:00.000Z',
      num_market_pairs: 163,
      tags: [],
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07'
      },
      cmc_rank: 28,
      last_updated: '2019-04-17T18:25:03.000Z',
      quote: {
        USD: {
          price: 1.92215612187,
          volume_24h: 63921768.4580023,
          percent_change_1h: 0.583812,
          percent_change_24h: -0.128884,
          percent_change_7d: -15.4491,
          market_cap: 269573550.8009786,
          last_updated: '2019-04-17T18:25:03.000Z'
        }
      }
    },
    {
      id: 3408,
      name: 'USD Coin',
      symbol: 'USDC',
      slug: 'usd-coin',
      circulating_supply: 255896670.081527,
      total_supply: 259875160.37,
      max_supply: null,
      date_added: '2018-10-08T00:00:00.000Z',
      num_market_pairs: 138,
      tags: [],
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
      },
      cmc_rank: 30,
      last_updated: '2019-04-17T18:25:09.000Z',
      quote: {
        USD: {
          price: 1.00381678154,
          volume_24h: 32494608.241401,
          percent_change_1h: -0.0656886,
          percent_change_24h: -0.368396,
          percent_change_7d: 0.048059,
          market_cap: 256873371.76804167,
          last_updated: '2019-04-17T18:25:09.000Z'
        }
      }
    },
    {
      id: 1104,
      name: 'Augur',
      symbol: 'REP',
      slug: 'augur',
      circulating_supply: 11000000,
      total_supply: 11000000,
      max_supply: null,
      date_added: '2015-10-27T00:00:00.000Z',
      num_market_pairs: 66,
      tags: [],
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: '0x1985365e9f78359a9b6ad760e32412f4a445e862'
      },
      cmc_rank: 35,
      last_updated: '2019-04-17T18:25:01.000Z',
      quote: {
        USD: {
          price: 19.1119640326,
          volume_24h: 7573494.70009003,
          percent_change_1h: 0.032449,
          percent_change_24h: 0.853935,
          percent_change_7d: -6.4583,
          market_cap: 210231604.3586,
          last_updated: '2019-04-17T18:25:01.000Z'
        }
      }
    }
  ]
};

const multiArray = {
  first: [1, 2],
  second: [3, 4]
};

console.log(arrayFrom(swapidata));
// console.log(isObject(swapidata));
// console.log(isPrim(null));
// console.log(isArray(swapidata));
