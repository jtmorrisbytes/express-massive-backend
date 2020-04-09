const express = require("express");
const Router = express.Router;
const fs = require("fs");
const path = require("path");
const rootPath = process.env.API_ROOT || "/api";
const routes = Router();
const path = require("path");
const fs = require("fs");

fs.readdirSync(__dirname).forEach((entry) => {
  if (fs.statSync(path.join(__dirname, entry)).isDirectory()) {
    let module = require(`./${entry}`);
    // console.log(module);
    routes.use(module.basePath, router);
  }
});
exports = {
  rootPath,
  router: routes,
};
