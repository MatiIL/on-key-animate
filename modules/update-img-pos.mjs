import { availableCells } from "./setup-grid.mjs";

const updateImagePosition = (focusedImg, numColumns, numRows, container, top, left) => {
  const cellWidth = container.clientWidth / numColumns;
  const cellHeight = container.clientHeight / numRows;

  let randomIndex = parseInt(focusedImg.getAttribute("data-random-index"));

  // If the randomIndex attribute is not a valid number or is out of bounds, assign a new valid random index to the image
  if (isNaN(randomIndex) || randomIndex < 0 || randomIndex >= numColumns * numRows) {
    randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    focusedImg.setAttribute("data-random-index", randomIndex);
  }
 
  const row = Math.floor(randomIndex / numColumns);
  const col = randomIndex % numColumns;

  const imgNewLeft = Math.floor(col * cellWidth);
  const imgNewTop = Math.floor(row * cellHeight);

  // Check if the new index is valid and not already occupied
  const newIndex = Math.floor((top / cellHeight)) * numColumns + Math.floor((left / cellWidth));
  if (newIndex >= 0 && newIndex < numColumns * numRows && availableCells.includes(newIndex)) {
    // Mark the old occupied cell as available again in availableCells
    availableCells.push(randomIndex);

    // Mark the new occupied cell as unavailable in availableCells
    const newIndexToRemove = availableCells.indexOf(newIndex);
    if (newIndexToRemove !== -1) {
      availableCells.splice(newIndexToRemove, 1);
    }
  } else {
    console.error("Invalid position values for the image:", focusedImg, top, left);
    // Handle the invalid position (optional)
    // You can reset the position of the image or take appropriate action here
    // Assign a new valid random index to the image
    randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    focusedImg.setAttribute("data-random-index", randomIndex);
    return { imgNewLeft, imgNewTop, newIndex: randomIndex }; // Return the new index to updateGrid
  }

  // Update the random index attribute of the focused image with the new index
  focusedImg.setAttribute("data-random-index", newIndex);

  return { imgNewLeft, imgNewTop, newIndex };
};

export { updateImagePosition };
