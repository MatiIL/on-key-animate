import { addImage } from "./modules/add-img.mjs";
import {
  manageGrid,
  occupiedCells,
  availableCells,
} from "./modules/manage-grid.mjs";
import { getRandomPosition, imgLeft, imgTop } from "./modules/random-posit.mjs";
import { updateImagePosition } from "./modules/update-img-pos.mjs";

const mainFrame = document.getElementById("main-frame");
const plusBtn = document.querySelector("button");
let isAddingImage = false;

plusBtn.addEventListener("click", () => {
  plusBtn.blur();
  if (!isAddingImage) {
    isAddingImage = true;
    onBtnClick();
  }
});

function onBtnClick() {
  const numColumns = 10;
  const numRows = 5;
  manageGrid(numColumns, numRows);

  // Clear the availableCells array without reassigning a new array
  availableCells.length = 0;

  // Initialize the availableCells array
  availableCells.push(...Array.from(Array(numColumns * numRows).keys()));

  const { imgLeft, imgTop } = getRandomPosition(
    availableCells,
    occupiedCells,
    numColumns,
    numRows,
    mainFrame
  );
  addImage(imgLeft, imgTop, mainFrame, () => {
    isAddingImage = false;
  });
}

document.addEventListener("keydown", function (event) {
  const focusedImg = document.activeElement;
  const containerWidth = mainFrame.clientWidth;
  const containerHeight = mainFrame.clientHeight;
  const imageWidth = 100; // Assuming image width is 100 pixels
  const imageHeight = 100; // Assuming image height is 100 pixels

  switch (event.key) {
    case "ArrowUp":
      // Calculate the new top position after moving up
      const newTopUp = focusedImg.offsetTop - 20;
      if (newTopUp >= 0) {
        focusedImg.style.top = `${newTopUp}px`;
        updateImagePosition(focusedImg, newTopUp, focusedImg.offsetLeft, mainFrame, occupiedCells, availableCells);
      }
      break;
    case "ArrowRight":
      // Calculate the new left position after moving right
      const newLeftRight = focusedImg.offsetLeft + 20;
      const maxLeftRight = containerWidth - imageWidth;
      if (newLeftRight <= maxLeftRight) {
        focusedImg.style.left = `${newLeftRight}px`;
        updateImagePosition(focusedImg, focusedImg.offsetTop, newLeftRight, mainFrame, occupiedCells, availableCells);
      }
      break;
    case "ArrowDown":
      // Calculate the new top position after moving down
      const newTopDown = focusedImg.offsetTop + 20;
      const maxTopDown = containerHeight - imageHeight;
      if (newTopDown <= maxTopDown) {
        focusedImg.style.top = `${newTopDown}px`;
        updateImagePosition(focusedImg, newTopDown, focusedImg.offsetLeft, mainFrame, occupiedCells, availableCells);
      }
      break;
    case "ArrowLeft":
      // Calculate the new left position after moving left
      const newLeft = focusedImg.offsetLeft - 20;
      if (newLeft >= 0) {
        focusedImg.style.left = `${newLeftLeft}px`;
        updateImagePosition(focusedImg, focusedImg.offsetTop, newLeft, mainFrame, occupiedCells, availableCells);
      }
      break;
  }
});

document.addEventListener("keyup", function (event) {
    const focusedImg = document.activeElement;
    if (event.target === focusedImg) {
      const top = focusedImg.style.top;
      const left = focusedImg.style.left;
      const parsedTop = parseFloat(top);
      const parsedLeft = parseFloat(left);
      if (!isNaN(parsedTop) && !isNaN(parsedLeft)) {
        updateImagePosition(parsedTop, parsedLeft, mainFrame, occupiedCells);
      } else {
        // Handle the case when style.top or style.left is not set or not valid numbers
        // For example, reset the image position to its initial position
        focusedImg.style.top = `${imgTop}px`;
        focusedImg.style.left = `${imgLeft}px`;
        console.error("Invalid position values for the image:", parsedTop, parsedLeft);
      }
    }
  });
  

