const { CMC_KEYS } = require("../config");

const keys = keyString => keyString.split(",");
const randomKey = arr => arr[Math.floor(Math.random() * arr.length)];

const configs = {
  CoinMarketCap: {
    headers: {
      "X-CMC_PRO_API_KEY": randomKey(keys(process.env.CMC_KEYS)),
      "Content-Type": "application/json"
    }
  }
};

module.exports = {
  configs
};
