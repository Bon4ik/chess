import { isPawnMoveValid } from "components/Board/helpers";

describe("Board helpers", () => {
  describe("isPawnMoveValid", () => {
    const defaultMatrix = [
      [
        { id: 8, cellType: "DARK", coordinates: [1, 0], value: "" },
        { id: 9, cellType: "LIGHT", coordinates: [1, 1], value: "" },
        {
          id: 10,
          cellType: "DARK",
          coordinates: [1, 2],
          chessPieceType: "DARK",
          value: "p",
        },
        { id: 11, cellType: "LIGHT", coordinates: [1, 3], value: "" },
        { id: 12, cellType: "DARK", coordinates: [1, 4], value: "" },
        { id: 13, cellType: "LIGHT", coordinates: [1, 5], value: "" },
        { id: 14, cellType: "DARK", coordinates: [1, 6], value: "" },
        { id: 15, cellType: "LIGHT", coordinates: [1, 7], value: "" },
      ],
    ];

    it("should return false when cells are the same", () => {
      // given
      const givenTargetCoordinates = [0, 0];
      const givenSelecteCoordinates = [0, 0];
      const givenBoardMatrix = defaultMatrix;
      const givenActivePlayer = "LIGHT";

      // when
      const result = isPawnMoveValid(
        givenTargetCoordinates,
        givenSelecteCoordinates,
        givenBoardMatrix,
        givenActivePlayer
      );

      // then
      expect(result).toBeFalsy();
    });

    it("should return true when target cell is diagonal and diff is 1 and value exists", () => {
      // given
      const givenTargetCoordinates = [0, 2];
      const givenSelecteCoordinates = [1, 3];
      const givenBoardMatrix = defaultMatrix;
      const givenActivePlayer = "LIGHT";

      // when
      const result = isPawnMoveValid(
        givenTargetCoordinates,
        givenSelecteCoordinates,
        givenBoardMatrix,
        givenActivePlayer
      );

      // then
      expect(result).toBeTruthy();
    });

    it("should return false when target cell col and selected cell col is different", () => {
      // given
      const givenTargetCoordinates = [0, 0];
      const givenSelecteCoordinates = [0, 1];
      const givenBoardMatrix = defaultMatrix;
      const givenActivePlayer = "LIGHT";

      // when
      const result = isPawnMoveValid(
        givenTargetCoordinates,
        givenSelecteCoordinates,
        givenBoardMatrix,
        givenActivePlayer
      );

      // then
      expect(result).toBeFalsy();
    });

    it("should return true when activePlayer is DARK and row diff is 1", () => {
      // given
      const givenTargetCoordinates = [1, 0];
      const givenSelecteCoordinates = [0, 0];
      const givenBoardMatrix = [[], defaultMatrix[0]];
      const givenActivePlayer = "DARK";

      // when
      const result = isPawnMoveValid(
        givenTargetCoordinates,
        givenSelecteCoordinates,
        givenBoardMatrix,
        givenActivePlayer
      );

      // then
      expect(result).toBeTruthy();
    });

    it("should return true when activePlayer is DARK and row diff is 2 and selectedRow is 1", () => {
      // given
      const givenTargetCoordinates = [3, 0];
      const givenSelecteCoordinates = [1, 0];
      const givenBoardMatrix = [[], [], [], defaultMatrix[0]];
      const givenActivePlayer = "DARK";

      // when
      const result = isPawnMoveValid(
        givenTargetCoordinates,
        givenSelecteCoordinates,
        givenBoardMatrix,
        givenActivePlayer
      );

      // then
      expect(result).toBeTruthy();
    });

    it("should return false when activePlayer is DARK and row diff is greater then 2", () => {
      // given
      const givenTargetCoordinates = [5, 0];
      const givenSelecteCoordinates = [0, 0];
      const givenBoardMatrix = [[], [], [], [], [], defaultMatrix[0]];
      const givenActivePlayer = "DARK";

      // when
      const result = isPawnMoveValid(
        givenTargetCoordinates,
        givenSelecteCoordinates,
        givenBoardMatrix,
        givenActivePlayer
      );

      // then
      expect(result).toBeFalsy();
    });

    it("should return true when activePlayer is LIGHT and row diff is 1", () => {
      // given
      const givenTargetCoordinates = [0, 0];
      const givenSelecteCoordinates = [1, 0];
      const givenBoardMatrix = defaultMatrix;
      const givenActivePlayer = "LIGHT";

      // when
      const result = isPawnMoveValid(
        givenTargetCoordinates,
        givenSelecteCoordinates,
        givenBoardMatrix,
        givenActivePlayer
      );

      // then
      expect(result).toBeTruthy();
    });

    it("should return true when activePlayer is LIGHT and row diff is 2 and selectedRow is 6", () => {
      // given
      const givenTargetCoordinates = [4, 0];
      const givenSelecteCoordinates = [6, 0];
      const givenBoardMatrix = [[], [], [], [], defaultMatrix[0]];
      const givenActivePlayer = "LIGHT";

      // when
      const result = isPawnMoveValid(
        givenTargetCoordinates,
        givenSelecteCoordinates,
        givenBoardMatrix,
        givenActivePlayer
      );

      // then
      expect(result).toBeTruthy();
    });

    it("should return false when activePlayer is LIGHT and row diff is greater then 2", () => {
      // given
      const givenTargetCoordinates = [0, 0];
      const givenSelecteCoordinates = [6, 0];
      const givenBoardMatrix = defaultMatrix;
      const givenActivePlayer = "LIGHT";

      // when
      const result = isPawnMoveValid(
        givenTargetCoordinates,
        givenSelecteCoordinates,
        givenBoardMatrix,
        givenActivePlayer
      );

      // then
      expect(result).toBeFalsy();
    });
  });
});
