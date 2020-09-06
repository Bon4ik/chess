import React from "react";
import renderer from "react-test-renderer";
import BottomBar from "components/Board/BottomBar";

describe("BottomBar", () => {
  it("should renders correctly", () => {
    const givenProps = {
      addPawn: jest.fn(),
      isAddPawnDisabled: false,
    };
    const tree = renderer.create(<BottomBar {...givenProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
