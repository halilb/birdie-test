import { Entity, Column, PrimaryGeneratedColumn, AfterLoad } from "typeorm";
import { Exclude } from "class-transformer";
import { classToPlain } from "class-transformer";

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

@Entity({ name: "events" })
export default class Event {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "enum",
    enum: EventType,
  })
  event_type!: EventType;

  @Column()
  visit_id!: string;

  @Column()
  timestamp!: Date;

  @Column()
  caregiver_id!: string;

  @Column()
  care_recipient_id!: string;

  @Exclude()
  @Column()
  payload!: string;

  data?: Object;

  @AfterLoad()
  parsePayload() {
    const payload = JSON.parse(this.payload);

    this.data = {
      alert_severity: payload.alert_severity,
      volume_ml: payload.volume_ml,
      note: payload.note,
      severity: payload.severity,
      fluid: payload.fluid,
      meal: payload.meal,
      mood: payload.mood,
      medication_failure_reason: payload.medication_failure_reason,
      task_schedule_note: payload.task_schedule_note,
      task_definition_description: payload.task_definition_description,
      visit_count: payload.visit_count,
    };
  }

  toJSON() {
    return classToPlain(this);
  }
}
