const full = [
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-cryptocurrency-metadata',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/cryptocurrency/info',
    'description': 'Get cryptocurrency metadata',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1,2,10',
    'template': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info{?id}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-cryptocurrency-coinmarketcap-id-map',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/cryptocurrency/map',
    'description': 'Get cryptocurrency CoinMarketCap ID map',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?listing_status=active&start=0&limit=100',
    'template': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map{?listing_status,start,limit}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'list-all-cryptocurrencies-latest',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/cryptocurrency/listings/latest',
    'description': 'List all cryptocurrencies (latest)',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?sort=market_cap&start=0&limit=10&cryptocurrency_type=tokens&convert=USD,BTC',
    'template': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest{?sort,start,limit,cryptocurrency_type,convert}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-cryptocurrency-market-pairs-latest',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/cryptocurrency/market-pairs/latest',
    'description': 'Get cryptocurrency market pairs (latest)',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/market-pairs/latest?id=1&convert=LTC,ETH',
    'template': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/market-pairs/latest{?id,convert}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-cryptocurrency-ohlcv-values-historical',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/cryptocurrency/ohlcv/historical',
    'description': 'Get cryptocurrency OHLCV values (historical)',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/ohlcv/historical?time_start=2017-01-01&id=1&time_start=2017-01-01&time_end=2018-01-01&interval=7d&count=12&convert=CAD',
    'template': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/ohlcv/historical{?id,time_start,time_end,interval,count,convert}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-cryptocurrency-market-quotes-latest',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/cryptocurrency/quotes/latest',
    'description': 'Get cryptocurrency market quotes (latest)',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,XRP,BCH,EOS,LTC,XLM&convert=BTC,ETH,EUR',
    'template': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest{?symbol,convert}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-cryptocurrency-market-quotes-historical',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/cryptocurrency/quotes/historical',
    'description': 'Get cryptocurrency market quotes (historical)',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/historical?id=1&time_start=2017&time_end=2018&interval=30d&count=12',
    'template': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/historical{?id,time_start,time_end,interval,count=12}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-exchange-metadata',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/exchange/info',
    'description': 'Get exchange metadata',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/exchange/info?id=1,2,10',
    'template': 'https://pro-api.coinmarketcap.com/v1/exchange/info{?id}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-exchange-to-coinmarketcap-id-map',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/exchange/map',
    'description': 'Get exchange to CoinMarketCap ID map',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/exchange/map?listing_status=active&start=0&limit=100',
    'template': 'https://pro-api.coinmarketcap.com/v1/exchange/map{?listing_status,start,limit}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'list-all-exchanges-latest',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/exchange/listings/latest',
    'description': 'List all exchanges (latest)',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/exchange/listings/latest?limit=10&market_type=no_fees&convert=USD',
    'template': 'https://pro-api.coinmarketcap.com/v1/exchange/listings/latest{?limit,market_type,convert}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-exchange-market-pairs-latest',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/exchange/market-pairs/latest',
    'description': 'Get exchange market pairs (latest)',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/exchange/market-pairs/latest?slug=gdax&convert=LTC,XRP,EUR',
    'template': 'https://pro-api.coinmarketcap.com/v1/exchange/market-pairs/latest{?slug,convert}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-exchange-market-quotes-latest',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/exchange/quotes/latest',
    'description': 'Get exchange market quotes (latest)',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/exchange/quotes/latest?id=2,16&convert=USD,BTC,LTC,EUR',
    'template': 'https://pro-api.coinmarketcap.com/v1/exchange/quotes/latest{?id,convert}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-exchange-market-quotes-historical',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/exchange/quotes/historical',
    'description': 'Get exchange market quotes (historical)',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/exchange/quotes/historical?id=270&time_start=2018-01-01&time_end=2018-05-01&interval=30d&count=12',
    'template': 'https://pro-api.coinmarketcap.com/v1/exchange/quotes/historical{?id,time_start,time_end,interval,count}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-aggregate-market-metrics-latest',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/global-metrics/quotes/latest',
    'description': 'Get aggregate market metrics (latest)',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?convert=BTC,ETH,LTC,EUR',
    'template': 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest{?convert}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'get-aggregate-market-metrics-historical',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/global-metrics/quotes/historical',
    'description': 'Get aggregate market metrics (historical)',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/historical?interval=monthly&count=100',
    'template': 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/historical{?interval,count}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  },
  {
    'category': 'Cryptocurrency',
    'collectionName': 'CoinMarketCap',
    'name': 'price-conversion-tool',
    'baseUrl': 'https://pro-api.coinmarketcap.com/',
    'endpoint': '/v1/tools/price-conversion',
    'description': 'Price conversion tool',
    'exampleCall': 'https://pro-api.coinmarketcap.com/v1/tools/price-conversion?symbol=BTC&amount=50&convert=USD,GBP,LTC',
    'template': 'https://pro-api.coinmarketcap.com/v1/tools/price-conversion{?symbol,amount,convert}',
    'endpointKeys': '[7fe09a81-a9fd-441c-97c8-020c2fce61f8,e4d871b2-65c3-4fa7-afd7-55cf9795dea2,8af83e2f-763e-47aa-8682-af42df1fb7d8]'
  }
];

module.exports = {
  full
};