const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const { MONGODB_URI } = require("./config");

function dbConnect(url = MONGODB_URI) {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .catch(err => {
      err.message = "Mongoose failed to connect";
      return err;
    });
}

function dbDisconnect() {
  return mongoose.disconnect();
}

function dbDrop() {
  return mongoose.connection.db.dropDatabase();
}

module.exports = {
  dbConnect,
  dbDisconnect,
  dbDrop
};
