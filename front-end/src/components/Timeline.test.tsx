import { waitFor } from "@testing-library/react";
import { def, get } from "bdd-lazy-var/getter";
import React from "react";
import { renderWithStore } from "utils/testing";
import Timeline from "./Timeline";
import MockAdapter from "axios-mock-adapter";

// @ts-ignore
const mock = new MockAdapter(window.client);

beforeEach(() => {
  mock.reset();
  mock.onGet("events").reply(() => [
    200,
    {
      events: get.events,
    },
  ]);
});

def("render", () => () => renderWithStore(<Timeline date={get.date} />));
def("renderAndLoad", () => async () => {
  const result = get.render();
  await waitFor(() => expect(mock.history.get).toHaveLength(1));
  return result;
});

def("date", () => new Date("2019-04-25"));
def("events", () => [
  {
    id: "1",
    event_type: "task_completed",
    timestamp: new Date("2019-04-25").toISOString(),
    data: {
      note: "first note",
    },
  },
  {
    id: "2",
    event_type: "task_completed",
    timestamp: new Date("2019-04-26").toISOString(),
    data: {
      note: "second note",
    },
  },
]);

it("requests the api", async () => {
  get.render();

  await waitFor(() => expect(mock.history.get).toHaveLength(1));

  const request = mock.history.get[0];
  expect(request.url).toEqual("events");
  expect(request.params).toEqual({
    care_recipient_id: "ad3512a6-91b1-4d7d-a005-6f8764dd0111",
    date: "2019-04-25T00:00:00.000Z",
  });
});

it("displays events only from the selected day", async () => {
  const { container } = await get.renderAndLoad();
  expect(container).toHaveTextContent("first note");
  expect(container).not.toHaveTextContent("second note");
});

describe("empty events", () => {
  def("events", () => []);

  it("displays empty message", async () => {
    const { container } = await get.renderAndLoad();
    expect(container).toHaveTextContent("No events found");
  });
});
