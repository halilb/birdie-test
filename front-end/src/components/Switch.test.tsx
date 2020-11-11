import { render } from "@testing-library/react";
import { def, get } from "bdd-lazy-var/getter";
import React from "react";
import Switch from "./Switch";

def("render", () => () =>
  render(
    <Switch
      condition={get.condition}
      fallback={get.fallback}
      children={get.children}
    />
  )
);
def("container", () => get.render().container);

def("condition", () => true);
def("children", () => <p>real child</p>);
def("fallback", () => <p>fallback child</p>);

it("renders the real child", () => {
  expect(get.container).toHaveTextContent("real child");
});

describe("false condition", () => {
  def("condition", () => false);

  it("renders the fallback child", () => {
    expect(get.container).toHaveTextContent("fallback child");
  });
});
