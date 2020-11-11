import { render } from "@testing-library/react";
import { def, get } from "bdd-lazy-var/getter";
import React from "react";
import EventCard from "./EventCard";

def("render", () => () => render(<EventCard event={get.event} />));

def("event", () => ({
  id: "123",
  event_type: "mood_observation",
  timestamp: new Date("2020-11-11T07:49:41.977Z").toISOString(),
  data: {
    mood: "Great",
  },
}));
def("container", () => get.render().container);

it("renders the date", () => {
  expect(get.container).toHaveTextContent("10:49 AM");
});

it("renders the event type", () => {
  expect(get.container).toHaveTextContent("Mood Observation");
});

it("renders the mood", () => {
  expect(get.container).toHaveTextContent("Mood: Great");
});
