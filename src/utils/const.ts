export const COLOR_PALETTE = {
  BOARD_DARK: "#8E2427",
  BOARD_LIGHT: "#FFFBDA",
  BACKGROUND: "#FAFAFA",
  WHITE: "#fff",
  BLACK: "#000",
};

export const BOARD_SIZE = 8;

export const CELL_TYPE = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};

export const CHESS_PIECE_TYPE = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};

export enum CHESS_PIECES {
  PAWN = "p",
  KNIGHT = "n",
  BISHOP = "b",
  ROOK = "r",
  QUEEN = "q",
  KING = "k",
}

export const ALL_CHESS_PIECES = new Map([
  ["k", true],
  ["q", true],
  ["r", true],
  ["b", true],
  ["n", true],
  ["p", true],
  ["K", true],
  ["Q", true],
  ["R", true],
  ["B", true],
  ["N", true],
  ["P", true],
]);

export const FREE_LEGAL_SLOTS = [0, 1, 2, 3, 4, 5, 6, 7];

export const DEFAULT_PAWN_ROW = 6;

export const DEFAULT_BOARD = "8/2p5/8/8/8/8/8/8";
