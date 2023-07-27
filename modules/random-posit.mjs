import { cellDimensionsCalc, imgPositionCalc, imgTopLeftCalc } from "./utils.mjs";

const getRandomPosition = (availableCells, numColumns, numRows, container) => {

  const cellDimensions = cellDimensionsCalc(container, numColumns, numRows);
  const { cellWidth, cellHeight } = cellDimensions;

  const randomIndex = Math.floor(Math.random() * availableCells.length);
  const occupiedIndex = availableCells[randomIndex];

  const imgRowAndCol = imgPositionCalc(occupiedIndex, numColumns);
  const { row, col } = imgRowAndCol;

  const imgTopAndLeft = imgTopLeftCalc(col, row, cellWidth, cellHeight);
  const { imgLeft, imgTop } = imgTopAndLeft;

  availableCells.splice(randomIndex, 1);

  return { imgLeft, imgTop, randomIndex };
}

export { getRandomPosition };






