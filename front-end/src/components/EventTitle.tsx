import { EventType } from "@App/models/Event";
import * as React from "react";
import styled from "styled-components";

enum EventStatus {
  WARNING,
  ERROR,
  SUCCESS,
  INFO,
}

type Props = {
  type: EventType;
};

const Title = styled.h5`
  margin: 0;
  color: #00254d;
  text-align: left;
`;

const Status = styled.div`
  margin-left: 12px;
  margin-right: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const EventData = {
  [EventType.FLUID_INTAKE_OBSERVATION]: {
    title: "Fluid Intake",
    status: EventStatus.SUCCESS,
  },
  [EventType.TASK_COMPLETED]: {
    title: "Task Completed",
    status: EventStatus.SUCCESS,
  },
  [EventType.PHYSICAL_HEALTH_OBSERVATION]: {
    title: "Physical Health Observation",
    status: EventStatus.SUCCESS,
  },
  [EventType.MOOD_OBSERVATION]: {
    title: "Mood Observation",
    status: EventStatus.SUCCESS,
  },
  [EventType.REGULAR_MEDICATION_TAKEN]: {
    title: "Medication Taken",
    status: EventStatus.SUCCESS,
  },
  [EventType.ALERT_RAISED]: {
    title: "Alert Raised",
    status: EventStatus.WARNING,
  },
  [EventType.GENERAL_OBSERVATION]: {
    title: "Fluid Intake",
    status: EventStatus.INFO,
  },
  [EventType.REGULAR_MEDICATION_NOT_TAKEN]: {
    title: "Medication Not Taken",
    status: EventStatus.ERROR,
  },
  [EventType.FOOD_INTAKE_OBSERVATION]: {
    title: "Food Intake",
    status: EventStatus.SUCCESS,
  },
  [EventType.MENTAL_HEALTH_OBSERVATION]: {
    title: "Mental Health Observation",
    status: EventStatus.INFO,
  },
  [EventType.REGULAR_MEDICATION_MAYBE_TAKEN]: {
    title: "Regular Medication maybe Taken",
    status: EventStatus.WARNING,
  },
  [EventType.CONCERN_RAISED]: {
    title: "Concern Raised",
    status: EventStatus.WARNING,
  },
  [EventType.REGULAR_MEDICATION_PARTIALLY_TAKEN]: {
    title: "Regular Medication Partially Taken",
    status: EventStatus.WARNING,
  },
  [EventType.CATHETER_OBSERVATION]: {
    title: "Catheter Observation",
    status: EventStatus.INFO,
  },
  [EventType.TOILET_VISIT_RECORDED]: {
    title: "Toilet Visit",
    status: EventStatus.INFO,
  },
};

const EventTitle: React.FC<Props> = (props) => {
  const { type } = props;

  const data = EventData[type];

  if (!data) {
    return null;
  }

  let color;
  switch (data.status) {
    case EventStatus.SUCCESS:
      color = "#28a745";
      break;
    case EventStatus.WARNING:
      color = "#ffc107";
      break;
    case EventStatus.ERROR:
      color = "#dc3545";
      break;
    case EventStatus.INFO:
      color = "#17a2b8";
      break;
    default:
      color = "transparent";
      break;
  }

  return (
    <>
      <Status color={color} />
      <Title>{data.title}</Title>
    </>
  );
};

export default EventTitle;
