let occupiedCells;
let availableCells = [];

const setupGrid = (columns, rows, prevIdx, newIdx) => {
  const numCells = columns * rows;
  if (!availableCells) {
    availableCells = Array.from(Array(numCells).keys());
  }
  if (!occupiedCells) {
    occupiedCells = Array(numCells).fill(false);
  }
  if (prevIdx !== undefined && newIdx !== undefined) {
    availableCells.push(prevIdx);
    occupiedCells[prevIdx] = false;
    const newIndexToRemove = availableCells.indexOf(newIdx);
    if (newIndexToRemove !== -1) {
      availableCells.splice(newIndexToRemove, 1);
      occupiedCells[newIndexToRemove] = true;
    }
  }
  return { occupiedCells, availableCells };
};

export { setupGrid };
