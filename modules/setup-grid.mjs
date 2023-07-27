let occupiedCells;
let availableCells = [];

const setupGrid = (columns, rows, prevIdx, newIdx) => {

  if (!availableCells || !occupiedCells) {
    const numCells = columns * rows;
    occupiedCells = Array(numCells).fill(false);
    availableCells = Array.from(Array(numCells).keys());
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
