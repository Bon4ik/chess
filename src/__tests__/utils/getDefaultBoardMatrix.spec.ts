import {
  fromFENtoArray,
  getChessPieceType,
  getDefaultMatrix,
} from "utils/getDefaultBoardMatrix";
import { CHESS_PIECE_TYPE } from "utils/const";

describe("getDefaultBoardMatrix", () => {
  describe("fromFENtoArray", () => {
    it("should return propper result when fen is valid", () => {
      // given
      const givenFen = "2p5";
      const expectedResult = ["", "", "p", "", "", "", "", ""];

      // when
      const result = fromFENtoArray(givenFen);

      // then
      expect(result).toEqual(expectedResult);
    });
  });

  describe("getChessPieceType", () => {
    it("should return undefined when chessPiece is empty", () => {
      // given
      const givenChessPiece = "";

      // when
      const result = getChessPieceType(givenChessPiece);

      // then
      expect(result).toBeUndefined();
    });

    it(`should return ${CHESS_PIECE_TYPE.LIGHT} when chessPiece is upper case`, () => {
      // given
      const givenChessPiece = "A";

      // when
      const result = getChessPieceType(givenChessPiece);

      // then
      expect(result).toEqual(CHESS_PIECE_TYPE.LIGHT);
    });

    it(`should return ${CHESS_PIECE_TYPE.DARK} when chessPiece is lower case`, () => {
      // given
      const givenChessPiece = "a";

      // when
      const result = getChessPieceType(givenChessPiece);

      // then
      expect(result).toEqual(CHESS_PIECE_TYPE.DARK);
    });
  });

  describe("getDefaultMatrix", () => {
    it("should return propper result", () => {
      // given
      const givenFen = "8/2p5/8/8/8/8/8/8";
      const expectedResult = [
        [
          { id: 0, cellType: "LIGHT", coordinates: [0, 0], value: "" },
          { id: 1, cellType: "DARK", coordinates: [0, 1], value: "" },
          { id: 2, cellType: "LIGHT", coordinates: [0, 2], value: "" },
          { id: 3, cellType: "DARK", coordinates: [0, 3], value: "" },
          { id: 4, cellType: "LIGHT", coordinates: [0, 4], value: "" },
          { id: 5, cellType: "DARK", coordinates: [0, 5], value: "" },
          { id: 6, cellType: "LIGHT", coordinates: [0, 6], value: "" },
          { id: 7, cellType: "DARK", coordinates: [0, 7], value: "" },
        ],
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
        [
          { id: 16, cellType: "LIGHT", coordinates: [2, 0], value: "" },
          { id: 17, cellType: "DARK", coordinates: [2, 1], value: "" },
          { id: 18, cellType: "LIGHT", coordinates: [2, 2], value: "" },
          { id: 19, cellType: "DARK", coordinates: [2, 3], value: "" },
          { id: 20, cellType: "LIGHT", coordinates: [2, 4], value: "" },
          { id: 21, cellType: "DARK", coordinates: [2, 5], value: "" },
          { id: 22, cellType: "LIGHT", coordinates: [2, 6], value: "" },
          { id: 23, cellType: "DARK", coordinates: [2, 7], value: "" },
        ],
        [
          { id: 24, cellType: "DARK", coordinates: [3, 0], value: "" },
          { id: 25, cellType: "LIGHT", coordinates: [3, 1], value: "" },
          { id: 26, cellType: "DARK", coordinates: [3, 2], value: "" },
          { id: 27, cellType: "LIGHT", coordinates: [3, 3], value: "" },
          { id: 28, cellType: "DARK", coordinates: [3, 4], value: "" },
          { id: 29, cellType: "LIGHT", coordinates: [3, 5], value: "" },
          { id: 30, cellType: "DARK", coordinates: [3, 6], value: "" },
          { id: 31, cellType: "LIGHT", coordinates: [3, 7], value: "" },
        ],
        [
          { id: 32, cellType: "LIGHT", coordinates: [4, 0], value: "" },
          { id: 33, cellType: "DARK", coordinates: [4, 1], value: "" },
          { id: 34, cellType: "LIGHT", coordinates: [4, 2], value: "" },
          { id: 35, cellType: "DARK", coordinates: [4, 3], value: "" },
          { id: 36, cellType: "LIGHT", coordinates: [4, 4], value: "" },
          { id: 37, cellType: "DARK", coordinates: [4, 5], value: "" },
          { id: 38, cellType: "LIGHT", coordinates: [4, 6], value: "" },
          { id: 39, cellType: "DARK", coordinates: [4, 7], value: "" },
        ],
        [
          { id: 40, cellType: "DARK", coordinates: [5, 0], value: "" },
          { id: 41, cellType: "LIGHT", coordinates: [5, 1], value: "" },
          { id: 42, cellType: "DARK", coordinates: [5, 2], value: "" },
          { id: 43, cellType: "LIGHT", coordinates: [5, 3], value: "" },
          { id: 44, cellType: "DARK", coordinates: [5, 4], value: "" },
          { id: 45, cellType: "LIGHT", coordinates: [5, 5], value: "" },
          { id: 46, cellType: "DARK", coordinates: [5, 6], value: "" },
          { id: 47, cellType: "LIGHT", coordinates: [5, 7], value: "" },
        ],
        [
          { id: 48, cellType: "LIGHT", coordinates: [6, 0], value: "" },
          { id: 49, cellType: "DARK", coordinates: [6, 1], value: "" },
          { id: 50, cellType: "LIGHT", coordinates: [6, 2], value: "" },
          { id: 51, cellType: "DARK", coordinates: [6, 3], value: "" },
          { id: 52, cellType: "LIGHT", coordinates: [6, 4], value: "" },
          { id: 53, cellType: "DARK", coordinates: [6, 5], value: "" },
          { id: 54, cellType: "LIGHT", coordinates: [6, 6], value: "" },
          { id: 55, cellType: "DARK", coordinates: [6, 7], value: "" },
        ],
        [
          { id: 56, cellType: "DARK", coordinates: [7, 0], value: "" },
          { id: 57, cellType: "LIGHT", coordinates: [7, 1], value: "" },
          { id: 58, cellType: "DARK", coordinates: [7, 2], value: "" },
          { id: 59, cellType: "LIGHT", coordinates: [7, 3], value: "" },
          { id: 60, cellType: "DARK", coordinates: [7, 4], value: "" },
          { id: 61, cellType: "LIGHT", coordinates: [7, 5], value: "" },
          { id: 62, cellType: "DARK", coordinates: [7, 6], value: "" },
          { id: 63, cellType: "LIGHT", coordinates: [7, 7], value: "" },
        ],
      ];

      // when
      const result = getDefaultMatrix(givenFen);

      // then
      expect(result).toEqual(expectedResult);
    });
  });
});
