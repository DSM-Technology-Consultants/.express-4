"use strict";

import HelloController from "../controllers/helloController.js";
import logger from "../../providers/logger.js";
import express from "express";

let router = express.Router({ mergeParams: true });

const helloController = new HelloController();

class HelloRouter {

  routes = router
    .use((req, res, next) => {
      logger.route({ helloController, req, res });
      next();
    })
    .get("/:name", helloController.hello);

}

export default HelloRouter;
