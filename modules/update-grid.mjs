import { availableCells } from "./manage-grid.mjs";

const mainFrame = document.getElementById("main-frame");

const updateGrid = (imgLeft, imgTop, numColumns, numRows, index) => {
  const col = Math.floor(imgLeft / (mainFrame.clientWidth / numColumns));
  const row = Math.floor(imgTop / (mainFrame.clientHeight / numRows));
  const occupiedIndex = row * numColumns + col;

  // Check if the random index is valid and not already occupied
  if (
    !isNaN(index) &&
    index >= 0 &&
    index < numColumns * numRows &&
    availableCells.includes(index)
  ) {
    // Remove the random index from availableCells
    const randomIndexToRemove = availableCells.indexOf(index);
    if (randomIndexToRemove !== -1) {
      availableCells.splice(randomIndexToRemove, 1);
    }

    // Add the occupied index to availableCells
    availableCells.push(occupiedIndex);
  } else {
    // Remove the occupied cell from availableCells
    const indexToRemove = availableCells.indexOf(occupiedIndex);
    if (indexToRemove !== -1) {
      availableCells.splice(indexToRemove, 1);
    }

    // Add the new position to availableCells
    availableCells.push(occupiedIndex);
  }
};

export { updateGrid };


