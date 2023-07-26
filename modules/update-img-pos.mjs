import { occupiedCells, availableCells } from './manage-grid.mjs';

const updateImagePosition = (focusedImg, numColumns, numRows, container, top, left) => {
  const cellWidth = container.clientWidth / numColumns;
  const cellHeight = container.clientHeight / numRows;

  let randomIndex = parseInt(focusedImg.getAttribute("data-random-index"));

  // If the randomIndex attribute is not set or is not a number, assign a valid random index to the image
  if (isNaN(randomIndex) || randomIndex < 0 || randomIndex >= numColumns * numRows) {
    randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    focusedImg.setAttribute("data-random-index", randomIndex);
  }

  const row = Math.floor(randomIndex / numColumns);
  const col = randomIndex % numColumns;

  const imgNewLeft = Math.floor(col * cellWidth);
  const imgNewTop = Math.floor(row * cellHeight);

  // Remove the occupied index from availableCells
  const indexToRemove = availableCells.indexOf(randomIndex);
  if (indexToRemove !== -1) {
    availableCells.splice(indexToRemove, 1);
  }

  // Update the occupied index with the new position
  occupiedCells[randomIndex] = false;
  const newIndex = Math.floor((top / cellHeight)) * numColumns + Math.floor((left / cellWidth));
  occupiedCells[newIndex] = true;

  // Update the random index attribute of the focused image with the new index
  focusedImg.setAttribute("data-random-index", newIndex);

  return { imgNewLeft, imgNewTop, newIndex };
};

export { updateImagePosition };


