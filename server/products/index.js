const express = require("express");
const products = express.Router();
const routePath = "/products";

products.get(routePath, (req, res) => {
  res.sendStatus(200);
});
