let basePath = "/products";
module.exports = {
  basePath,
  router: require("express")
    .Router()
    .get(basePath, (req, res) => {
      res.sendStatus(200);
    })
};
