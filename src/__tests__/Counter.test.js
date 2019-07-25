import React from "react";
import { shallow } from "enzyme";
import Counter from "../Counter";

describe("Testing Counter Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Counter count={5} />);

    expect(wrapper.debug()).toMatchSnapshot();
    wrapper.setProps({count:10})
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
