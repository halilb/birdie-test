import { EventType } from "@App/store/orm/event/model";
import React from "react";
import styled from "styled-components";

const water = require("./water.svg");
const completedTask = require("./completed-task.svg");
const body = require("./body.svg");
const mood = require("./mood.svg");
const medicine = require("./medicine.svg");
const siren = require("./siren.svg");
const observation = require("./observation.svg");
const food = require("./food.svg");
const concern = require("./concern.svg");
const catheter = require("./catheter.svg");
const toilet = require("./toilet.svg");

type Props = {
  type: EventType;
};

const Image = styled.img`
  width: 36px;
  height: 36px;
`;

const EventIcon: React.FC<Props> = (props) => {
  const { type } = props;

  let image;
  switch (type) {
    case EventType.FLUID_INTAKE_OBSERVATION:
      image = water;
      break;
    case EventType.TASK_COMPLETED:
      image = completedTask;
      break;
    case EventType.PHYSICAL_HEALTH_OBSERVATION:
      image = body;
      break;
    case EventType.MOOD_OBSERVATION:
    case EventType.MENTAL_HEALTH_OBSERVATION:
      image = mood;
      break;
    case EventType.REGULAR_MEDICATION_TAKEN:
    case EventType.REGULAR_MEDICATION_NOT_TAKEN:
    case EventType.REGULAR_MEDICATION_MAYBE_TAKEN:
    case EventType.REGULAR_MEDICATION_PARTIALLY_TAKEN:
      image = medicine;
      break;
    case EventType.ALERT_RAISED:
      image = siren;
      break;
    case EventType.GENERAL_OBSERVATION:
      image = observation;
      break;
    case EventType.FOOD_INTAKE_OBSERVATION:
      image = food;
      break;
    case EventType.CONCERN_RAISED:
      image = concern;
      break;
    case EventType.CATHETER_OBSERVATION:
      image = catheter;
      break;
    case EventType.TOILET_VISIT_RECORDED:
      image = toilet;
      break;
    default:
      break;
  }

  if (!image) {
    return null;
  }

  return <Image src={image} />;
};

export default EventIcon;
