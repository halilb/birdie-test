import { Event } from "@App/models/Event";
import * as React from "react";
import EventCard from "@App/components/EventCard";

export type Props = {
  events: Event[];
};

const Timeline: React.FC<Props> = (props) => {
  const { events } = props;

  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Timeline;
