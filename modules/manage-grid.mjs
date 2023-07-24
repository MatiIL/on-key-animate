let occupiedCells;
let availableCells = [];

const manageGrid = (columns, rows) => {
  const numCells = columns * rows;

  occupiedCells = Array(numCells).fill(false);
  
  for (let i = 0; i < numCells; i++) {
    if (!occupiedCells[i]) {
      availableCells.push(i);
    }
  }
}

export { manageGrid, occupiedCells, availableCells }