import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Categories from "./Categories";

describe("Categories container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Categories />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
