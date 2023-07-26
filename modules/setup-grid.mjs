let occupiedCells;
let availableCells = [];

const setupGrid = (columns, rows) => {
  const numCells = columns * rows;
  occupiedCells = Array(numCells).fill(false);
  availableCells = Array.from(Array(numCells).keys());
};

export { setupGrid, occupiedCells, availableCells };
