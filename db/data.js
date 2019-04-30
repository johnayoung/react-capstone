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

module.exports = {
  users
};
