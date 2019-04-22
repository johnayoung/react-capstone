const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const chalk = require("chalk");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo")(session);
const lusca = require("lusca");
const flash = require("express-flash");
const passportInit = require("./passport/init");

const { PORT, SESSION_SECRET, MONGODB_URI, CLIENT_ORIGIN } = require("./config");
const { dbConnect } = require("./db-mongoose");

const usersRouter = require("./routes/users");
const endpointsRouter = require("./routes/endpoints");
const primaryRouter = require("./routes/primary");

const app = express();

// Connect to MongoDB
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useNewUrlParser", true);
mongoose.connect(MONGODB_URI);
mongoose.connection.on("error", err => {
  console.error(err);
  console.log("%s MongoDB connection error. Please make sure MongoDB is running.", chalk.red("✗"));
  process.exit();
});

// Log all requests. Skip logging during testing
app.use(
  morgan(process.env.NODE_ENV === "development" ? "dev" : "common", {
    skip: () => process.env.NODE_ENV === "test"
  })
);

// Create a static webserver
app.use(express.static(path.join(__dirname, "client/build")));

// Express config
app.set("host", process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0");
app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
    store: new MongoStore({
      url: MONGODB_URI,
      autoReconnect: true
    })
  })
);
app.use(passport.initialize());
app.use(passport.session());
// app.use(flash());
// app.use((req, res, next) => {
//   if (req.path === "/api/upload") {
//     next();
//   } else {
//     lusca.csrf()(req, res, next);
//   }
// });
// app.use(lusca.xframe("SAMEORIGIN"));
// app.use(lusca.xssProtection(true));
// app.disable("x-powered-by");
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
// Accept requests from our client
app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

// Mount routers
app.use("/api/users", usersRouter);
app.use("/api/endpoints", endpointsRouter);
app.use("/", primaryRouter);

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

app.listen(app.get("port"), () => {
  console.log(
    "%s App is running at http://localhost:%d in %s mode",
    chalk.green("✓"),
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app; // Export for testing
