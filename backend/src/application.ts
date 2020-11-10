import * as express from "express";
import { createConnection } from "typeorm";
import { pingController } from "./controllers/ping";
import { eventController } from "./controllers/event";

const app = express();

app.use((_req, res, next) => {
  // FIXME: we need to restrict this to a specific domain before making it to production
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

createConnection().then(() => {
  app.use(pingController);
  app.use(eventController);
});

export default app;
