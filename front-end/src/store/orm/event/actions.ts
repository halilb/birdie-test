import { AxiosAction, FailureAction } from "redux-axios-middleware";
import { Fields as EventFields } from "./model";

export const GET_EVENTS = "timeline/GET_EVENTS";
export const GET_EVENTS_SUCCESS = "timeline/GET_EVENTS_SUCCESS";
export const GET_EVENTS_FAILURE = "timeline/GET_EVENTS_FAILURE";

type GetEventsSuccessAction = {
  type: typeof GET_EVENTS_SUCCESS;
  payload: { data: { events: EventFields[] } };
};

export type GetEventsResolvedAction =
  | FailureAction<typeof GET_EVENTS_FAILURE>
  | GetEventsSuccessAction;

export function getEvents(
  careRecipientId: string,
  date: Date
): AxiosAction<typeof GET_EVENTS> {
  return {
    type: GET_EVENTS,
    payload: {
      request: {
        url: "events",
        method: "get",
        params: {
          care_recipient_id: careRecipientId,
          date: date.toISOString(),
        },
      },
    },
  };
}

export type RootAction = GetEventsResolvedAction;
