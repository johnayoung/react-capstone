import React from "react";
import { shallow, mount } from "enzyme";
import RenderField from "./RenderField";

describe("A suite of tests for the RenderField component", () => {
  // Smoke test
  it("should render Redux Form specific components with default props", () => {
    const component = shallow(
      <RenderField meta={{ touched: true, error: null }} />
    );

    expect(component).toMatchSnapshot();
  });
});
