import * as express from "express";
import { Request, Response } from "express";
import { getConnection, Between } from "typeorm";
import Event, { EventType } from "../entity/Event";
import * as dayjs from "dayjs";

export const eventController = express.Router();

const eventKeys = Object.values(EventType);
const dateFormat = "YYYY-MM-DD";

eventController.get("/events", async function(req: Request, res: Response) {
  const { care_recipient_id, date: dateParam = "" } = req.query;
  let date = dayjs();
  if (typeof dateParam === "string") {
    date = dayjs(dateParam);
  }

  const repository = getConnection().getRepository(Event);
  const events = await repository.find({
    where: [
      {
        care_recipient_id,
        timestamp: Between(
          date.format(dateFormat),
          date.add(1, "day").format(dateFormat)
        ),
      },
    ],
    order: {
      timestamp: "DESC",
    },
  });
  const filtered = events.filter(({ event_type }) =>
    eventKeys.includes(event_type)
  );
  res.json({
    events: filtered,
  });
});
