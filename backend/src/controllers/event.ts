import * as express from "express";
import { Request, Response } from "express";
import { getConnection } from "typeorm";
import Event, { EventType } from "../entity/Event";

export const eventController = express.Router();

eventController.get("/events", async function(_req: Request, res: Response) {
  const repository = getConnection().getRepository(Event);
  const events = await repository.find({
    skip: 0,
    take: 10,
    where: [{ event_type: EventType.MOOD_OBSERVATION }],
  });
  res.json(events);
});
