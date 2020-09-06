interface IBoardCellEntity {
  id: number;
  cellType: string;
  chessPieceType?: string;
  value?: string;
  coordinates: number[];
}
