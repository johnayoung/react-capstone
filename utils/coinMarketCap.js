const axios = require("axios");

// const keys = [CMC_KEY_1, CMC_KEY_2, CMC_KEY_3];
const keys = process.env.CMC_KEYS.split(",");

const randomKey = arr => arr[Math.floor(Math.random() * arr.length)];

const urlString = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1%2C2%2C10"

const getEndpoint = urlString => {
  
}

axios({
  url: ,
  method: "GET",
  // data: {
  //   igdbId
  // },
  headers: {
    "X-CMC_PRO_API_KEY": randomKey(keys),
    "Content-Type": "application/json"
  }
})
  .then(response => {
    return response.data;
  })
  .then(response => {
    console.log(response);
  });

module.exports = {
  // symbolId
};
