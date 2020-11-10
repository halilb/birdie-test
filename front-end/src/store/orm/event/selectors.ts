import { createSelector } from "redux-orm";
import orm from "store/orm";
import { ManySelector } from "types/redux-orm";
import { Fields } from "./model";
import { RootState } from "store";
import dayjs from "dayjs";

// @ts-ignore
export const selectEvents: ManySelector<Fields> = createSelector(orm.Event);

export function selectEventsByDate(
  state: RootState,
  dateParam: Date
): Fields[] {
  const events = selectEvents(state);
  const date = dayjs(dateParam);

  return events.filter((event: Fields) => {
    return date.isSame(event.timestamp, "day");
  });
}
