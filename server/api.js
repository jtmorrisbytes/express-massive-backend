const express = require("express");
const morgan = require("morgan");
const server = express();
let HOST = process.env.HOST;
let PORT = +process.env.PORT;
if (process.NODE_ENV === "production") {
  PORT = PORT || 80;
  HOST = HOST || "0.0.0.0";
  server.use(morgan("dev"));
} else {
  PORT = PORT || 3001;
  HOST = HOST || "127.0.0.1";
  server.use(morgan("tiny"));
}

server.listen(HOST, PORT, () => {
  console.log(`API LISTENING on ${HOST}:${PORT}`);
});
