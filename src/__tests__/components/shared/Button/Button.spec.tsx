import React from "react";
import renderer from "react-test-renderer";
import Button from "components/shared/Button";

describe("Button", () => {
  it("should renders correctly", () => {
    const tree = renderer
      .create(<Button onClick={jest.fn()}>Test</Button>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
