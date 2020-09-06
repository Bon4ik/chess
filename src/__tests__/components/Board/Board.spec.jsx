import React from "react";
import renderer from "react-test-renderer";

import Board from "components/Board";

describe("BottomBar", () => {
  it("should renders correctly", () => {
    const tree = renderer.create(<Board />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
