function getRandomPosition(availableCells, numColumns, numRows, container) {
  const cellWidth = container.clientWidth / numColumns;
  const cellHeight = container.clientHeight / numRows;

  const randomIndex = Math.floor(Math.random() * availableCells.length);
  const occupiedIndex = availableCells[randomIndex];

  const row = Math.floor(occupiedIndex / numColumns);
  const col = occupiedIndex % numColumns;

  const imgLeft = Math.floor(col * cellWidth);
  const imgTop = Math.floor(row * cellHeight);

  // Remove the occupied index from availableCells
  availableCells.splice(randomIndex, 1);

  return { imgLeft, imgTop };
}

export { getRandomPosition };

