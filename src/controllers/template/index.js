// do processing here

module.exports = {
  get: {
    one: null,
    all: null,
    many: null,
    filter: null
  },
  post: {
    one: null,
    all: null,
    many: null
  }
};
let get;
let post;
let put;
let del;

try {
  get = require("./get");
} catch (e) {}
try {
  post = require("./put");
} catch (e) {}
try {
  put = require("./post");
} catch (e) {}
try {
  del = require("./delete");
} catch (e) {}

if (get) {
  module.exports.one = get.one;
}
