import React from "react";
import { shallow } from "enzyme";
import Todos from "../Todos";

import configureStore from "redux-mock-store";
const mockStore = configureStore();

const initialState = {
  todos: [
    { id: 0, text: "fazer cafe" },
    { id: 1, text: "fazer codigo" },
    { id: 2, text: "fazer live" }
  ]
};

const store = mockStore(initialState);

describe("Testing Todos Component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Todos />, { context: { store } }).dive();

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
