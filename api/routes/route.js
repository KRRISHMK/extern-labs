const express = require("express");
const router = express.Router();
const Service = require("./Service");
let routes = (app) => {
  router.get("/files", Service.getListFiles);
  router.get("/files/:name", Service.download);
  router.post("/", Service.upload);
  router.post("/login", Service.login);
  app.use(router);
};
module.exports = routes;
