require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const api = express();
const swagger = require("swagger-generator-express");
let { version, name, description } = require("./package.json");

let HOST = process.env.HOST;
let PORT = process.env.APIPORT;
const basePath = "/api";

if (process.NODE_ENV === "production") {
  PORT = PORT || 80;
  HOST = HOST || "0.0.0.0";
  api.use(morgan("dev"));
} else {
  PORT = PORT || Math.random() * (8000 - 3000) + 3000;
  HOST = HOST || "127.0.0.1";
  api.use(morgan("tiny"));
}

const swaggerSchema = {
  title: name,
  version: version,
  basePath: basePath,
  host: `${HOST}:${PORT + 1}`,
  schemes: ["http"]
};

swagger.serveSwagger(api, "/swagger", swaggerSchema, {
  routePath: "./src/routes",
  requestModelPath: "./src/requestModels",
  responseModelPath: "./src/responseModels"
});

console.log(`${HOST}:${PORT}`);
api.listen(HOST, PORT, () => {
  console.log(`API LISTENING on ${HOST}:${PORT}`);
});
