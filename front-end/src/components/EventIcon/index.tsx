import { EventType } from "store/orm/event/model";
import React from "react";
import styled from "styled-components";

import water from "./water.svg";
import completedTask from "./completed-task.svg";
import body from "./body.svg";
import mood from "./mood.svg";
import medicine from "./medicine.svg";
import siren from "./siren.svg";
import observation from "./observation.svg";
import food from "./food.svg";
import concern from "./concern.svg";
import catheter from "./catheter.svg";
import toilet from "./toilet.svg";

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
