import { occupiedCells } from "./manage-grid.mjs";

const updateImagePosition = (img, top, left, container, numColumns,
  numRows) => {
    const cellWidth = container.clientWidth / numColumns;
    const cellHeight = container.clientHeight / numRows;
  
    const row = Math.floor(top / cellHeight);
    const col = Math.floor(left / cellWidth);
  
    const newIndex = row * numColumns + col;
  
    // Check if the new index is within the valid range of occupiedCells array
    if (newIndex >= 0 && newIndex < occupiedCells.length) {
      // Clear the previous position
      console.log("new index is within valid range of occupiedCells")
      const prevIndex = occupiedCells.indexOf(true);
      if (prevIndex !== -1) {
        occupiedCells[prevIndex] = false;
      }
  
      // Set the new position
      occupiedCells[newIndex] = true;
      img.style.top = `${top}px`;
      img.style.left = `${left}px`;
    } else {
      // console.error("Invalid position values for the image:", top, left);
    }
  };
  
  export { updateImagePosition };

  