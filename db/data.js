const Endpoint = require("../models/endpoint");

const users = [
  {
    _id: "5c3f5ca9ec37422f44bdaa82",
    tokens: [],
    username: "thejyoung",
    email: "jyoung1985@live.com",
    password: "$2b$10$J4VdjOadRUt.0.aXqI8mceeW70asKmiUjv3TXUwlwPeo1.VGdlrqy"
  },
  {
    _id: "5cbe171e5e4c4668b0dfc73a",
    profile: {
      name: "John Young"
    },
    username: "notthejyoung",
    tokens: [
      {
        kind: "google",
        accessToken:
          "ya29.GlzzBhmDqmg3Btya7foe8oc2R5DFSLwC3tWnwVdjqNQfCTl4DiZDQtFG1vAkOVbdo_EeDDG-RULD2E6bauij59STfRSbmWrVD_X0wgKNNYoIDgX2GREs-Hrk2ywd7w"
      },
      {
        kind: "google",
        accessToken:
          "ya29.GlvzBhSS_6IxjGzohmxQfhNnM4mZ0oolU6_qcJYO2JeiX3MnwcVn7wJG9ojN4WwnsZ1UNd6xecZgVmtO6VyOrvxtav5xD_DXu_GW8ThT9WsPNHE2to_Jx1UPW5TZ"
      },
      {
        kind: "google",
        accessToken:
          "ya29.GlvzBg6xaUN-fIoB-837hxJOzG1V7Ej3_QBFbNr_6-eCEzjhuN6Z6xz0H4JGwEX5yowODg7kKih6Nnxeks61AhlphjuiTJl_qSItR_ZInhdMxmOg1uXkke14FRen"
      },
      {
        kind: "google",
        accessToken:
          "ya29.GlvzBtORjRl3ArR8RXV93H24W4-gb-fWw0xvalEgN90fDWpES5xVXmlfgmUzU7GislVjUnGRm4lanzO_lAml24lDL05SCCsmeskxpRfGntN5gPf7r56pjgnd-4ac"
      },
      {
        kind: "google",
        accessToken:
          "ya29.GlvzBpMujHmFLHADnCI6y63u-pKR0aiVt6NMLapK_7hQwhTaThU4FDHg0LtcjUKo-oWXtLhzgUH-oIpFYX7-jqD33Gq4OEQHYqZWvV-D1rPePwFhu00iqfotoqV2"
      },
      {
        kind: "google",
        accessToken:
          "ya29.Glv0BpMpnE91Gg8G4CApBN9gwzXImrh-ocU_JXdfOIPY5XuEF2Hx3qL4_ePfb_LOViK66oNNSUHzH9SXlKLiFSQgL2xxSIuJcatNVPkwNy0pj7-N1Z__nNEpATkl"
      },
      {
        kind: "google",
        accessToken:
          "ya29.Glv0Bor25HbQvbHa0gBp777LwjvTMm6DF2UiVM_CHPrAatwCctVcnaNsJeUVDhyG5Puz1Ju_SdkvT9Ja80EsmyG19aXXU61BGXRjkFv_0wJZBwEpKxu-mP0AxXOQ"
      }
    ],
    email: "john.young@spreadstreet.io",
    google: "107632546883448248931"
  }
];

function createEndpoint(name, description, fullUrl, userId, parameters) {
  const parsedURI = Endpoint.parseURL(fullUrl);
  return Object.assign(
    {},
    {
      name,
      description,
      fullUrl,
      userId,
      parameters
    },
    parsedURI
  );
}

const stockName = [
  "iex-batch",
  "iex-batch-multi",
  "book",
  "chart",
  "chart-5y",
  "chart-2y",
  "chart-1y",
  "chart-ytd",
  "chart-6m",
  "chart-3m",
  "chart-1m",
  "chart-1d",
  "chart-date",
  "chart-dynamic",
  "sector?co-collectionName",
  "tag?colle-collectionName",
  "list?coll-collectionName",
  "company",
  "crypto",
  "delayed-quote",
  "dividends-5y",
  "dividends-2y",
  "dividends-1y",
  "dividends-ytd",
  "dividends-6m",
  "dividends-3m",
  "dividends-1m",
  "earnings",
  "today-earnings",
  "effective-spread",
  "financials",
  "financial-period",
  "upcoming-ipos",
  "today-ipos",
  "threshold-securities",
  "threshold-securities-date",
  "threshold-securities-sample",
  "short-interest",
  "short-interest-date",
  "short-interest-sample",
  "stats",
  "largest-trades",
  "list-mostactive",
  "list-gainers",
  "list-losers",
  "list-iexvolume",
  "list-iexpercent",
  "list-infocus",
  "logo",
  "news",
  "news-last-1",
  "news-last-5",
  "ohlc-by-stock",
  "ohlc",
  "peers",
  "stock-previous",
  "market-previous",
  "price",
  "quote",
  "relevant",
  "sector-performance",
  "splits-5y",
  "splits-2y",
  "splits-1y",
  "splits-ytd",
  "splits-6m",
  "splits-3m",
  "splits-1m",
  "time-series",
  "volume-by-venue",
  "symbols",
  "corporate-actions",
  "corporate-actions-date",
  "corporate-actions-sample",
  "dividends",
  "dividends-date",
  "dividends-sample",
  "next-day-ex-date",
  "next-day-ex-date-date",
  "next-day-ex-date-sample",
  "symbol-directory",
  "symbol-directory-date",
  "symbol-directory-sample",
  "tops",
  "tops-symbols",
  "tops-symbols-csv",
  "last",
  "last-symbols",
  "last-symbols-csv",
  "hist",
  "deep",
  "book",
  "trades",
  "system-event",
  "trading-status",
  "op-halt-status",
  "ssr-status",
  "security-event",
  "trade-breaks",
  "auction",
  "deep",
  "stats-intraday",
  "stats-recent",
  "stats-records",
  "stats-historical",
  "stats-historical-date",
  "stats-historical-date-csv",
  "stats-historical-daily",
  "stats-historical-daily-date",
  "stats-historical-daily-last-5",
  "market"
];

const stockUrls = [
  "https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,news,chart&range=1m&last=1",
  "https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5",
  "https://api.iextrading.com/1.0/stock/aapl/book",
  "https://api.iextrading.com/1.0/stock/aapl/chart",
  "https://api.iextrading.com/1.0/stock/aapl/chart/5y",
  "https://api.iextrading.com/1.0/stock/aapl/chart/2y",
  "https://api.iextrading.com/1.0/stock/aapl/chart/1y",
  "https://api.iextrading.com/1.0/stock/aapl/chart/ytd",
  "https://api.iextrading.com/1.0/stock/aapl/chart/6m",
  "https://api.iextrading.com/1.0/stock/aapl/chart/3m",
  "https://api.iextrading.com/1.0/stock/aapl/chart/1m",
  "https://api.iextrading.com/1.0/stock/aapl/chart/1d",
  "https://api.iextrading.com/1.0/stock/aapl/chart/date/20180129",
  "https://api.iextrading.com/1.0/stock/aapl/chart/dynamic",
  "https://api.iextrading.com/1.0/stock/market/collection/sector?collectionName=Health%20Care",
  "https://api.iextrading.com/1.0/stock/market/collection/tag?collectionName=Computer%20Hardware",
  "https://api.iextrading.com/1.0/stock/market/collection/list?collectionName=iexvolume",
  "https://api.iextrading.com/1.0/stock/aapl/company",
  "https://api.iextrading.com/1.0/stock/market/crypto",
  "https://api.iextrading.com/1.0/stock/aapl/delayed-quote",
  "https://api.iextrading.com/1.0/stock/aapl/dividends/5y",
  "https://api.iextrading.com/1.0/stock/aapl/dividends/2y",
  "https://api.iextrading.com/1.0/stock/aapl/dividends/1y",
  "https://api.iextrading.com/1.0/stock/aapl/dividends/ytd",
  "https://api.iextrading.com/1.0/stock/aapl/dividends/6m",
  "https://api.iextrading.com/1.0/stock/aapl/dividends/3m",
  "https://api.iextrading.com/1.0/stock/aapl/dividends/1m",
  "https://api.iextrading.com/1.0/stock/aapl/earnings",
  "https://api.iextrading.com/1.0/stock/market/today-earnings",
  "https://api.iextrading.com/1.0/stock/aapl/effective-spread",
  "https://api.iextrading.com/1.0/stock/aapl/financials",
  "https://api.iextrading.com/1.0/stock/aapl/financials?period=annual",
  "https://api.iextrading.com/1.0/stock/market/upcoming-ipos",
  "https://api.iextrading.com/1.0/stock/market/today-ipos",
  "https://api.iextrading.com/1.0/stock/market/threshold-securities",
  "https://api.iextrading.com/1.0/stock/market/threshold-securities/20171210",
  "https://api.iextrading.com/1.0/stock/market/threshold-securities/sample",
  "https://api.iextrading.com/1.0/stock/ziext/short-interest",
  "https://api.iextrading.com/1.0/stock/market/short-interest/20171210",
  "https://api.iextrading.com/1.0/stock/market/short-interest/sample",
  "https://api.iextrading.com/1.0/stock/aapl/stats",
  "https://api.iextrading.com/1.0/stock/aapl/largest-trades",
  "https://api.iextrading.com/1.0/stock/market/list/mostactive",
  "https://api.iextrading.com/1.0/stock/market/list/gainers",
  "https://api.iextrading.com/1.0/stock/market/list/losers",
  "https://api.iextrading.com/1.0/stock/market/list/iexvolume",
  "https://api.iextrading.com/1.0/stock/market/list/iexpercent",
  "https://api.iextrading.com/1.0/stock/market/list/infocus",
  "https://api.iextrading.com/1.0/stock/aapl/logo",
  "https://api.iextrading.com/1.0/stock/aapl/news",
  "https://api.iextrading.com/1.0/stock/aapl/news/last/1",
  "https://api.iextrading.com/1.0/stock/market/news/last/5",
  "https://api.iextrading.com/1.0/stock/aapl/ohlc",
  "https://api.iextrading.com/1.0/stock/market/ohlc",
  "https://api.iextrading.com/1.0/stock/aapl/peers",
  "https://api.iextrading.com/1.0/stock/aapl/previous",
  "https://api.iextrading.com/1.0/stock/market/previous",
  "https://api.iextrading.com/1.0/stock/aapl/price",
  "https://api.iextrading.com/1.0/stock/aapl/quote",
  "https://api.iextrading.com/1.0/stock/aapl/relevant",
  "https://api.iextrading.com/1.0/stock/market/sector-performance",
  "https://api.iextrading.com/1.0/stock/aapl/splits/5y",
  "https://api.iextrading.com/1.0/stock/aapl/splits/2y",
  "https://api.iextrading.com/1.0/stock/aapl/splits/1y",
  "https://api.iextrading.com/1.0/stock/aapl/splits/ytd",
  "https://api.iextrading.com/1.0/stock/aapl/splits/6m",
  "https://api.iextrading.com/1.0/stock/aapl/splits/3m",
  "https://api.iextrading.com/1.0/stock/aapl/splits/1m",
  "https://api.iextrading.com/1.0/stock/aapl/time-series",
  "https://api.iextrading.com/1.0/stock/aapl/volume-by-venue",
  "https://api.iextrading.com/1.0/ref-data/symbols",
  "https://api.iextrading.com/1.0/ref-data/daily-list/corporate-actions",
  "https://api.iextrading.com/1.0/ref-data/daily-list/corporate-actions/20171210",
  "https://api.iextrading.com/1.0/ref-data/daily-list/corporate-actions/sample",
  "https://api.iextrading.com/1.0/ref-data/daily-list/dividends",
  "https://api.iextrading.com/1.0/ref-data/daily-list/dividends/20171210",
  "https://api.iextrading.com/1.0/ref-data/daily-list/dividends/sample",
  "https://api.iextrading.com/1.0/ref-data/daily-list/next-day-ex-date",
  "https://api.iextrading.com/1.0/ref-data/daily-list/next-day-ex-date/20171210",
  "https://api.iextrading.com/1.0/ref-data/daily-list/next-day-ex-date/sample",
  "https://api.iextrading.com/1.0/ref-data/daily-list/symbol-directory",
  "https://api.iextrading.com/1.0/ref-data/daily-list/symbol-directory/20171210",
  "https://api.iextrading.com/1.0/ref-data/daily-list/symbol-directory/sample",
  "https://api.iextrading.com/1.0/tops",
  "https://api.iextrading.com/1.0/tops?symbols=SNAP,fb,AIG%2b",
  "https://api.iextrading.com/1.0/tops?symbols=SNAP,fb,AIG%2b&format=csv",
  "https://api.iextrading.com/1.0/tops/last",
  "https://api.iextrading.com/1.0/tops/last?symbols=SNAP,fb,AIG%2b",
  "https://api.iextrading.com/1.0/tops/last?symbols=SNAP,fb,AIG%2b&format=csv",
  "https://api.iextrading.com/1.0/hist?date=20170515",
  "https://api.iextrading.com/1.0/deep?symbols=snap",
  "https://api.iextrading.com/1.0/deep/book?symbols=yelp",
  "https://api.iextrading.com/1.0/deep/trades?symbols=snap",
  "https://api.iextrading.com/1.0/deep/system-event",
  "https://api.iextrading.com/1.0/deep/trading-status?symbols=snap",
  "https://api.iextrading.com/1.0/deep/op-halt-status?symbols=snap",
  "https://api.iextrading.com/1.0/deep/ssr-status?symbols=snap",
  "https://api.iextrading.com/1.0/deep/security-event?symbols=snap",
  "https://api.iextrading.com/1.0/deep/trade-breaks?symbols=snap",
  "https://api.iextrading.com/1.0/deep/auction?symbols=ziext",
  "https://api.iextrading.com/1.0/deep/official-price?symbols=snap",
  "https://api.iextrading.com/1.0/stats/intraday",
  "https://api.iextrading.com/1.0/stats/recent",
  "https://api.iextrading.com/1.0/stats/records",
  "https://api.iextrading.com/1.0/stats/historical",
  "https://api.iextrading.com/1.0/stats/historical?date=201605",
  "https://api.iextrading.com/1.0/stats/historical?date=201605&format=csv",
  "https://api.iextrading.com/1.0/stats/historical/daily",
  "https://api.iextrading.com/1.0/stats/historical/daily?date=201605",
  "https://api.iextrading.com/1.0/stats/historical/daily?last=5",
  "https://api.iextrading.com/1.0/market"
];

const stockEndpoints = stockName
  .map((name, index) => {
    return {
      name,
      fullUrl: stockUrls[index],
      description: `The ${name} endpoint, from the IEX API`,
      userId: "333333333333333333333300",
      parameters: [{ name: "chartReset", value: "true", type: "text", required: false }]
    };
  })
  .map(newObj =>
    createEndpoint(
      newObj.name,
      newObj.description,
      newObj.fullUrl,
      newObj.userId,
      newObj.parameters
    )
  );

module.exports = {
  users,
  stockEndpoints
};
