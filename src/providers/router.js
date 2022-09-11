"use strict";

import Debug from "./debug.js";
import HelloRouter from "../http/routes/helloRouter.js"
import { env } from "process";
import express from "express";

let router = express.Router({ mergeParams: true });

const
  debug = new Debug(),
  helloRouter = new HelloRouter();

if (env.NODE_ENV !== "dev") {
  debug.routes = (req, res) => {
    res.status(418).json({ "code": res.statusCode, "message": "I'm a Teapot" });
  };
}

router
  .use("/debug", debug.routes)
  .use("/hello", helloRouter.routes);

export default router;
