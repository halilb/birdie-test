import { Entity, Column, PrimaryGeneratedColumn, AfterLoad } from "typeorm";
import { Exclude } from "class-transformer";
import { classToPlain } from "class-transformer";

export enum EventType {
  FLUID_INTAKE_OBSERVATION = "fluid_intake_observation",
  TASK_COMPLETED = "task_completed",
  PHYSICAL_HEALTH_OBSERVATION = "physical_health_observation",
  VISIT_COMPLETED = "visit_completed",
  CHECK_OUT = "check_out",
  MOOD_OBSERVATION = "mood_observation",
  REGULAR_MEDICATION_TAKEN = "regular_medication_taken",
  ALERT_RAISED = "alert_raised",
  NO_MEDICATION_OBSERVATION_RECEIVED = "no_medication_observation_received",
  INCONTINENCE_PAD_OBSERVATION = "incontinence_pad_observation",
  CHECK_IN = "check_in",
  GENERAL_OBSERVATION = "general_observation",
  REGULAR_MEDICATION_NOT_TAKEN = "regular_medication_not_taken",
  FOOD_INTAKE_OBSERVATION = "food_intake_observation",
  TASK_COMPLETION_REVERTED = "task_completion_reverted",
  MENTAL_HEALTH_OBSERVATION = "mental_health_observation",
  MEDICATION_SCHEDULE_UPDATED = "medication_schedule_updated",
  VISIT_CANCELLED = "visit_cancelled",
  REGULAR_MEDICATION_MAYBE_TAKEN = "regular_medication_maybe_taken",
  MEDICATION_SCHEDULE_CREATED = "medication_schedule_created",
  ALERT_QUALIFIED = "alert_qualified",
  TASK_SCHEDULE_CREATED = "task_schedule_created",
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

  mood?: string;

  @AfterLoad()
  parsePayload() {
    if (this.event_type === EventType.MOOD_OBSERVATION) {
      const payload = JSON.parse(this.payload);
      this.mood = payload.mood;
    }
  }

  toJSON() {
    return classToPlain(this);
  }
}
