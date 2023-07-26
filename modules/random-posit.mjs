const getRandomPosition = (availableCells, numColumns, numRows, container) => {
  const cellWidth = container.clientWidth / numColumns;
  const cellHeight = container.clientHeight / numRows;

  const randomIndex = Math.floor(Math.random() * availableCells.length);
  const occupiedIndex = availableCells[randomIndex];

  const row = Math.floor(occupiedIndex / numColumns);
  const col = occupiedIndex % numColumns;

  const imgLeft = Math.floor(col * cellWidth);
  const imgTop = Math.floor(row * cellHeight);

  availableCells.splice(randomIndex, 1);

  return { imgLeft, imgTop, randomIndex };
}

export { getRandomPosition };






