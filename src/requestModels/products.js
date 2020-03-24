const joi = require("@hapi/joi");
const model = {
  id: joi
    .number()
    .integer()
    .positive()
    .min(0)
    .required()
};

module.exports = {
  GET: {},
  POST: {},
  PUT: {},
  DELETE: {}
};
