import { render } from "@testing-library/react";
import { def, get } from "bdd-lazy-var/getter";
import React from "react";
import EventTitle from "./EventTitle";

def("render", () => () => render(<EventTitle type={get.eventType} />));

def("eventType", () => "task_completed");
def("container", () => get.render().container);

it("renders title", () => {
  expect(get.container).toHaveTextContent("Task Completed");
});

describe("food_intake", () => {
  def("eventType", () => "food_intake_observation");

  it("renders title", () => {
    expect(get.container).toHaveTextContent("Food Intake");
  });
});
