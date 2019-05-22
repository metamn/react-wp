import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import SiteDescription from "./SiteDescription";

describe("SiteDescription container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<SiteDescription />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
