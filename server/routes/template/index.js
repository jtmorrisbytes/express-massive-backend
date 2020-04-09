// do processing here
const controller = require("../../controllers/template");
const router = require("express").Router();

controller.get("/", controller.getAll);

module.exports = {
  basePath: "/template",
  router,
};
