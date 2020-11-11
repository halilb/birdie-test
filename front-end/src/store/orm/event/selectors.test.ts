import { def, get } from "bdd-lazy-var/getter";
import orm from "store/orm";
import { createTestStore } from "utils/testing";
import { selectEvents, selectEventsByDate } from "./selectors";

def("store", () => createTestStore());
def("state", () => get.store.getState());
def("mutableSession", () => () => orm.mutableSession(get.state.orm));
def("events", () => [
  {
    id: "1",
    event_type: "task_completed",
    timestamp: new Date("2020-06-10"),
  },
  {
    id: "2",
    event_type: "mood_observation",
    timestamp: new Date("2020-06-11"),
    data: {
      mood: "GOOD",
    },
  },
]);

beforeEach(() => {
  for (const event of get.events) {
    get.mutableSession().Event.upsert(event);
  }
});

describe("selectEvents", () => {
  it("selects all events", () => {
    expect(selectEvents(get.state)).toEqual(get.events);
  });
});

describe("selectEventsByDate", () => {
  it("selects events by date", () => {
    expect(selectEventsByDate(get.state, new Date("2020-06-10"))).toEqual([
      get.events[0],
    ]);
    expect(selectEventsByDate(get.state, new Date("2020-06-11"))).toEqual([
      get.events[1],
    ]);
  });

  it("returns empty", () => {
    expect(selectEventsByDate(get.state, new Date("2019-03-03"))).toEqual([]);
  });
});
