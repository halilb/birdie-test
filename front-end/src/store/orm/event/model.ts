import { Model, ModelType } from "redux-orm";
import { GET_EVENTS_SUCCESS, RootAction } from "./actions";

export enum EventType {
  FLUID_INTAKE_OBSERVATION = "fluid_intake_observation",
  TASK_COMPLETED = "task_completed",
  PHYSICAL_HEALTH_OBSERVATION = "physical_health_observation",
  MOOD_OBSERVATION = "mood_observation",
  REGULAR_MEDICATION_TAKEN = "regular_medication_taken",
  ALERT_RAISED = "alert_raised",
  GENERAL_OBSERVATION = "general_observation",
  REGULAR_MEDICATION_NOT_TAKEN = "regular_medication_not_taken",
  FOOD_INTAKE_OBSERVATION = "food_intake_observation",
  MENTAL_HEALTH_OBSERVATION = "mental_health_observation",
  REGULAR_MEDICATION_MAYBE_TAKEN = "regular_medication_maybe_taken",
  CONCERN_RAISED = "concern_raised",
  REGULAR_MEDICATION_PARTIALLY_TAKEN = "regular_medication_partially_taken",
  CATHETER_OBSERVATION = "catheter_observation",
  TOILET_VISIT_RECORDED = "toilet_visit_recorded",
}

export interface EventData {
  note?: string;
  alert_severity?: string;
  volume_ml?: string;
  severity?: string;
  fluid?: string;
  meal?: string;
  mood?: string;
  medication_failure_reason?: string;
  task_schedule_note?: string;
  task_definition_description?: string;
  visit_count?: string;
}

export interface Fields {
  id: string;
  event_type: EventType;
  data: EventData;
  timestamp: string;
}

export default class Event extends Model<typeof Event, Fields> {
  static modelName = "Event";

  static reducer(action: RootAction, EventModel: ModelType<Event>): void {
    switch (action.type) {
      case GET_EVENTS_SUCCESS: {
        action.payload.data.events.forEach((event) => {
          EventModel.upsert(event);
        });
        break;
      }
      default:
        break;
    }
  }
}
