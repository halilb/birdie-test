import * as express from "express";
import { createConnection } from "typeorm";
import { pingController } from "./controllers/ping";
import { eventController } from "./controllers/event";

const app = express();

createConnection().then(() => {
  app.use(pingController);
  app.use(eventController);
});

export default app;
