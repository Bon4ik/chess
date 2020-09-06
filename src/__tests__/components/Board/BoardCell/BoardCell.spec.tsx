import React from "react";
import renderer from "react-test-renderer";
import BoardCell from "components/Board/BoardCell";

describe("BottomBar", () => {
  it("should renders correctly", () => {
    const givenProps = {
      id: 1,
      cellType: "DARK",
      value: "p",
      chessPieceType: "DARK",
      coordinates: [0, 0],
      onCellClick: jest.fn(),
      isActive: true,
    };
    const tree = renderer.create(<BoardCell {...givenProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
