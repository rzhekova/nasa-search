import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders one Switch component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Switch").length).toEqual(1);
  });

  it("renders three route components", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Route").length).toEqual(3);
  });

  it("toggleCheckBoxClick once adds asset type to assetTypes array in state", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().toggleCheckBoxClick("1");
    wrapper.instance().toggleCheckBoxClick("2");
    const state = wrapper.state();

    expect(state.assetTypes.includes("1")).toBeTruthy();
    expect(state.assetTypes.includes("2")).toBeTruthy();
    expect(state.assetTypes.length).toEqual(2);
  });

  it("toggleCheckBoxClick twice removes asset type from assetTypes array in state", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().toggleCheckBoxClick("1");
    wrapper.instance().toggleCheckBoxClick("2");
    wrapper.instance().toggleCheckBoxClick("1");
    const state = wrapper.state();

    expect(state.assetTypes.includes("1")).toBeFalsy();
    expect(state.assetTypes.includes("2")).toBeTruthy();
    expect(state.assetTypes.length).toEqual(1);
  });

  it("tests handleChange function updates state with new searchTerm", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleChange("hello");
    const state = wrapper.state();

    expect(state.searchTerm).toEqual("hello");
  });

  it("tests handleSubmit function updates state with search results", async () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleChange("moon");
    wrapper.instance().toggleCheckBoxClick("image");
    const event = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit(event);

    // const state = wrapper.state();

    // expect(state.results).toEqual(2);
  });
});
