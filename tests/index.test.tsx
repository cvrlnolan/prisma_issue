/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "../pages/index";

describe("Test Suite 1", () => {
  it("should render page correctly", () => {
    render(<Home />);
    screen.debug();
  });

  it("should match snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
