import { getEvents } from "@App/store/orm/event/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "@App/components/Spinner";
import Switch from "@App/components/Switch";
import EventCard from "@App/components/EventCard";
import { selectEventsByDate } from "@App/store/orm/event/selectors";
import { RootState } from "@App/store";

export type Props = {
  date: Date;
};

const Timeline: React.FC<Props> = (props) => {
  const { date } = props;
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const events = useSelector((state: RootState) =>
    selectEventsByDate(state, date)
  );

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      // TODO: get recipient id from session
      await dispatch(getEvents("ad3512a6-91b1-4d7d-a005-6f8764dd0111", date));
      setIsLoading(false);
    }

    fetchEvents();
    // tslint:disable-next-line:align
  }, [dispatch, date]);

  return (
    <Switch condition={!isLoading} fallback={<Spinner />}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Switch>
  );
};

export default Timeline;
