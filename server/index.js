const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
let HOST = process.env.HOST;
let PORT = +process.env.PORT;
if (process.NODE_ENV === "production") {
  PORT = PORT || 80;
  HOST = HOST || "0.0.0.0";
  app.use(express.static(path.join("..", "client", "build")));
  app.use(morgan("dev"));
} else {
  PORT = PORT || 3001;
  HOST = HOST || "127.0.0.1";
  app.use(express.static(path.join("..", "client", "public")));
  app.use(morgan("tiny"));
}

app.listen(HOST, PORT, () => {
  console.log(`SERVER LISTENING on ${HOST}:${PORT}`);
  try {
    /*
    the api server runs by itself so you can listen on port 80 for the front-end

    */
    require("./api");
  } catch (e) {}
});
