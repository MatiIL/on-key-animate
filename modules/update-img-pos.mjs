const updateImagePosition = (img, newTop, newLeft, container, occupiedCells, availableCells) => {
    const numColumns = 10;
    const numRows = 5;
    const cellWidth = container.clientWidth / numColumns;
    const cellHeight = container.clientHeight / numRows;
  
    const row = Math.floor(newTop / cellHeight);
    const col = Math.floor(newLeft / cellWidth);
  
    const newIndex = row * numColumns + col;
  
    if (newIndex >= 0 && newIndex < occupiedCells.length) {
      const prevIndex = occupiedCells.indexOf(true);
      if (prevIndex !== -1) {
        occupiedCells[prevIndex] = false;
        availableCells.push(prevIndex);
      }
  
      occupiedCells[newIndex] = true;
      availableCells = availableCells.filter(index => index !== newIndex);
    } else {
      console.error("Invalid parameters for updateImagePosition.");
    }
  };
  
  export { updateImagePosition };
  