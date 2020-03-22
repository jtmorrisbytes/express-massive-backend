module.exports = function loadConfig() {
  let envFile = require("dotenv").config().parsed;
  if (!process.env.NODE_ENV) {
    throw TypeError(
      "process.env.NODE_ENV was undefined. make sure to define NODE_ENV in environment variables"
    );
  } else {
    console.log("NODE_ENV is", process.env.NODE_ENV);
  }
  let defaults = require("./defaults.json")[process.env["NODE_ENV"]];

  let config = Object.assign({}, defaults, envFile, {
    NODE_ENV: process.env.NODE_ENV.trim()
  });
  if (process.env.DEBUG === "true") {
    console.log("loaded defaults", defaults);
    console.log("loaded config object", config);
  }

  return config;
};
