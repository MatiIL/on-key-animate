import { cellDimensionsCalc } from "./utils.mjs";

const updateImagePosition = (availableCells, focusedImg, numColumns, numRows, container, top, left) => {

  const cellDimensions = cellDimensionsCalc(container, numColumns, numRows);
  const { cellWidth, cellHeight } = cellDimensions;
  let prevIndex = parseInt(focusedImg.getAttribute("data-random-index"));

  if (isNaN(prevIndex) || prevIndex < 0 || prevIndex >= numColumns * numRows) {
    prevIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    focusedImg.setAttribute("data-random-index", prevIndex);
  }

  const newIndex = Math.floor((top / cellHeight)) * numColumns + Math.floor((left / cellWidth));

  if (newIndex >= 0 && newIndex < numColumns * numRows && !availableCells.includes(newIndex)) {
    focusedImg.setAttribute("data-random-index", newIndex);
    return { prevIndex, newIndex };
  } else {
    const newRandomIdx = availableCells[Math.floor(Math.random() * availableCells.length)];
    focusedImg.setAttribute("data-random-index", newRandomIdx);
    return { prevIndex, newIndex: newRandomIdx }; 
  }
  
};

export { updateImagePosition };
