import { def, get } from "bdd-lazy-var/getter";
import orm from "store/orm";
import { createTestStore, mockAxios } from "utils/testing";
import { getEvents } from "./actions";
import MockAdapter from "axios-mock-adapter";

// @ts-ignore
const mock = new MockAdapter(window.client);

def("store", () => createTestStore());
def("session", () => orm.session(get.store.getState().orm));
def("events", () => [
  {
    id: "1",
    event_type: "task_completed",
  },
]);

describe("getEvents", () => {
  beforeEach(() => {
    mock.onGet("events").reply(200, {
      events: get.events,
    });
  });

  it("fetches events and stores it in the orm", async () => {
    await get.store.dispatch(getEvents("123", new Date()));

    const events = get.session.Event.all().toRefArray();
    expect(events).toEqual(get.events);
  });
});
