import { render } from "@testing-library/react";
import { def, get } from "bdd-lazy-var/getter";
import React from "react";
import EventData from "./EventData";

def("render", () => () => render(<EventData data={get.data} />));

def("data", () => ({
  note: "some note",
  alert_severity: "MEDIUM",
  volume_ml: "800",
  severity: "LOW",
  fluid: "caffein",
  meal: "hamburger",
  mood: "GOOD",
  medication_failure_reason: "Refused",
  task_schedule_note: "clean the desk",
  task_definition_description: "",
  visit_count: "3",
}));
def("container", () => get.render().container);

it("renders note", () => {
  expect(get.container).toHaveTextContent("Note: some note");
});

it("renders alert_severity", () => {
  expect(get.container).toHaveTextContent("Alert Severity: MEDIUM");
});

it("renders volume_ml", () => {
  expect(get.container).toHaveTextContent("Volume(ml): 800");
});

it("renders severity", () => {
  expect(get.container).toHaveTextContent("Alert Severity: MEDIUM");
});

it("renders fluid", () => {
  expect(get.container).toHaveTextContent("Fluid: caffein");
});

it("renders meal", () => {
  expect(get.container).toHaveTextContent("Meal: hamburger");
});

it("renders mood", () => {
  expect(get.container).toHaveTextContent("Mood: GOOD");
});

it("renders medication_failure_reason", () => {
  expect(get.container).toHaveTextContent("Reason: Refused");
});

it("renders task_schedule_note", () => {
  expect(get.container).toHaveTextContent("Task Note: clean the desk");
});

it("does not render task_definition_description", () => {
  expect(get.container).not.toHaveTextContent("Task description");
});

it("renders visit_count", () => {
  expect(get.container).toHaveTextContent("Visit Count: 3");
});
