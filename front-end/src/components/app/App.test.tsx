import { fireEvent, waitFor } from "@testing-library/react";
import { def, get } from "bdd-lazy-var/getter";
import React from "react";
import { renderWithStore } from "utils/testing";
import App from "./App";
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

def("render", () => () => renderWithStore(<App />));
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
    timestamp: new Date("2019-05-12").toISOString(),
    data: {
      note: "first note",
    },
  },
  {
    id: "2",
    event_type: "task_completed",
    timestamp: new Date("2019-05-11").toISOString(),
    data: {
      note: "second note",
    },
  },
]);

it("requests the api initially", async () => {
  get.render();

  await waitFor(() => expect(mock.history.get).toHaveLength(1));

  const request = mock.history.get[0];
  expect(request.url).toEqual("events");
  expect(request.params).toEqual({
    care_recipient_id: "ad3512a6-91b1-4d7d-a005-6f8764dd0111",
    date: "2019-05-12T00:00:00.000Z",
  });
});

it("requests the api when new date is selected", async () => {
  const { container, getByText } = await get.renderAndLoad();
  expect(container).toHaveTextContent("first note");
  expect(container).not.toHaveTextContent("second note");

  // select May 11
  fireEvent.click(getByText("2019"));
  fireEvent.click(getByText("11"));

  await waitFor(() => expect(mock.history.get).toHaveLength(2));
  const request = mock.history.get[1];
  expect(request.url).toEqual("events");
  expect(request.params).toEqual({
    care_recipient_id: "ad3512a6-91b1-4d7d-a005-6f8764dd0111",
    date: "2019-05-10T21:00:00.000Z",
  });
  expect(container).toHaveTextContent("second note");
  expect(container).not.toHaveTextContent("first note");
});
