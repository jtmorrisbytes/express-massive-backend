let config = require("./scripts/loadConfig")();

const express = require("express");
const morgan = require("morgan");
const api = express.Router();
const swagger = require("swagger-generator-express");
let { version, name, description } = require("./package.json");

const swaggerSchema = {
  title: name,
  version: version,
  basePath: config.apiBasePath,
  host: `${config.HOST}:${config.PORT}`,
  schemes: ["http"]
};

swagger.serveSwagger(api, "/swagger", swaggerSchema, {
  routePath: "./src/routes",
  requestModelPath: "./src/requestModels",
  responseModelPath: "./src/responseModels"
});

module.exports = {
  router: api,
  basePath: config.apiBasePath
};
