let config = require("./loadConfig")();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
let HOST = process.env.HOST || "127.0.0.1";
let PORT = +process.env.PORT;
if (process.NODE_ENV === "production") {
  PORT = PORT || 80;
  app.use(express.static(path.join("..", "client", "build")));
  app.use(morgan("dev"));
} else {
  PORT = PORT || 3001;
  app.use(express.static(path.join("..", "client", "public")));
  app.use(morgan("tiny"));
}

const api = require("./api.js");
// use the api server
console.log(api);
app.use(api.basePath, api.router);

app.listen(PORT, HOST, () => {
  console.log(`SERVER LISTENING on ${HOST}:${PORT}`);
});
