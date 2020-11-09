import * as React from "react";
import styled from "styled-components";
import EventIcon from "@App/components/EventIcon";
import EventTitle from "@App/components/EventTitle";
import { Event } from "@App/models/Event";
import EventData from "./EventData";

type Props = {
  event: Event;
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 1rem auto 0 auto;
  padding: 16px 32px;
  border-radius: 8px;
  text-align: center;
  background-color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const DateText = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 10px;
`;

const intlFormat = new Intl.DateTimeFormat("default", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

const EventCard: React.FC<Props> = (props) => {
  const { event } = props;
  const { event_type, data, timestamp } = event;

  return (
    <Container>
      <DateText>{intlFormat.format(new Date(timestamp))}</DateText>
      <Header>
        <EventIcon type={event_type} />
        <EventTitle type={event_type} />
      </Header>
      <EventData data={data} />
    </Container>
  );
};

export default EventCard;
