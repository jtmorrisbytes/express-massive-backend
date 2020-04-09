require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
let SERVER_HOST = SERVER_HOST || "127.0.0.1";
let PORT = +process.env.PORT;

// if publishing client and server together,
// make sure to include an app.use

if (process.NODE_ENV === "production") {
  PORT = PORT || 80;
  app.use(morgan("tiny"));
} else {
  PORT = PORT || 3001;
  app.use(morgan("dev"));
}
const routes = require("./routes");
app.use(routes.rootPath, routes.router);
app.listen(PORT, HOST, () => {
  console.log(`SERVER LISTENING on ${HOST}:${PORT}`);
});
