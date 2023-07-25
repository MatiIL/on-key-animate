let imgLeft, imgTop;

const getRandomPosition = (
  availableCells,
  occupiedCells,
  numColumns,
  numRows,
  container
) => {
  const randomIndex =
    availableCells[Math.floor(Math.random() * availableCells.length)];
  occupiedCells[randomIndex] = true;

  const row = Math.floor(randomIndex / numColumns);
  const col = randomIndex % numColumns;

  const cellWidth = (container.clientWidth - (numColumns - 1) * 3) / numColumns;
  const cellHeight = (container.clientHeight - (numRows - 1) * 3) / numRows;
  const imgLeft = col * (cellWidth + 3);
  const imgTop = row * (cellHeight + 3);

  return { imgLeft, imgTop };
};

export { getRandomPosition, imgLeft, imgTop };

