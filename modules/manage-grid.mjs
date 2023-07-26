let occupiedCells;
let availableCells = [];

const manageGrid = (columns, rows) => {

  const numCells = columns * rows;
  
  if (!occupiedCells) {
    // Initialize the occupiedCells array only if it is not already initialized
    occupiedCells = Array(numCells).fill(false);
  }

  if (availableCells.length === 0) {
    // Initialize availableCells with all cell indices only if it is empty
    availableCells = Array.from(Array(numCells).keys());
  }
};

export { manageGrid, occupiedCells, availableCells };
