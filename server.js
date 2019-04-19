const express = require("express");
const fs = require("fs");
const https = require("https");
const path = require("path");
const cors = require("cors");
const socketio = require("socket.io");
const morgan = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const localStrategy = require("./passport/local");
const jwtStrategy = require("./passport/jwt");
const passportInit = require("./passport/init");

const { NODE_ENV, PORT, MONGODB_URI, SESSION_SECRET } = require("./config");
const { dbConnect } = require("./db-mongoose");

const usersRouter = require("./routes/users");
const endpointsRouter = require("./routes/endpoints");
const authRouter = require("./routes/auth");
const oAuthRouter = require("./routes/oAuth");

const certOptions = () => {
  let certs;
  if (process.env.NODE_ENV === "windows") {
    certs = {
      key: fs.readFileSync(path.resolve("certs/windows/server.key")),
      cert: fs.readFileSync(path.resolve("certs/windows/server.crt"))
    };
  } else if (process.env.NODE_ENV === "development") {
    certs = {
      key: fs.readFileSync(path.resolve("certs/osx/server.key")),
      cert: fs.readFileSync(path.resolve("certs/osx/server.crt"))
    };
  }

  return certs;
};

const app = express();
app.use(cors());
const server = https.createServer(certOptions(), app);

// Log all requests. Skip logging during testing
app.use(
  morgan(process.env.NODE_ENV === "development" ? "dev" : "common", {
    skip: () => process.env.NODE_ENV === "test"
  })
);

// Create a static webserver
app.use(express.static(path.join(__dirname, "client/build")));

// Parse request body
app.use(express.json());
app.use(passport.initialize());
passportInit();

// Configure passport to utilize strategies
// passport.use(localStrategy);
// passport.use(jwtStrategy);
// passport.use(googleStrategy);

// saveUninitialized: true allows us to attach the socket id to the session
// before we have athenticated the user
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);

// Connecting sockets to the server and adding them to the request
// so that we can access them later in the controller
const io = socketio(server);
app.set("io", io);

// Mount routers
app.use("/api/users", usersRouter);
app.use("/api/endpoints", endpointsRouter);
app.use("/api", authRouter);
app.use("/", oAuthRouter);

// Serves up docs
app.get("/api/docs", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./docs.html"));
});

// Handles GET requests
// app.get("*", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

// Catch-all 404
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Custom Error Handler
app.use((err, req, res, next) => {
  if (err.status) {
    const errBody = Object.assign({}, err, {
      message: err.message
    });
    res.status(err.status).json(errBody);
  } else {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
});

function runServer(port = PORT) {
  server
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on("error", err => {
      console.error("Express failed to start");
      console.error(err);
    });
}

// Listen for incoming connections
if (require.main === module) {
  // Connect to DB and Listen for incoming connections
  dbConnect();
  runServer();
}

module.exports = app; // Export for testing
