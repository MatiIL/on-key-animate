import { addImage } from "./modules/add-img.mjs";
import { manageGrid, availableCells } from "./modules/manage-grid.mjs";
import { getRandomPosition } from "./modules/random-posit.mjs";
import { moveImage } from "./modules/move-img.mjs";
import { updateImagePosition } from "./modules/update-img-pos.mjs";
import { updateGrid } from "./modules/update-grid.mjs";
import { shuffleArray } from "./modules/utils.mjs";

//Global Variables

const mainFrame = document.getElementById("main-frame");
const plusBtn = document.querySelector("button");
const numColumns = 10;
const numRows = 5;
let isAddingImage = false;
let topOnStop, leftOnStop;

//Click and Arrow Key Events

plusBtn.addEventListener("click", () => {
  plusBtn.blur();
  if (!isAddingImage) {
    isAddingImage = true;
    onBtnClick();
  }
});

document.addEventListener("keydown", (event) => {
    const updatedPosition = moveImage(event);
    if (updatedPosition) {
      topOnStop = updatedPosition.top;
      leftOnStop = updatedPosition.left;
    }
});

document.addEventListener("keyup", () => {
    const newPositionValues = updateImagePosition(
        document.activeElement, 
        numColumns, 
        numRows,
        mainFrame, 
        topOnStop,
        leftOnStop
        );
        if (newPositionValues) {
            const { imgNewLeft, imgNewTop, newIndex } = newPositionValues;
            updateGrid(imgNewLeft, imgNewTop, numColumns, numRows, newIndex);
  }
});

document.addEventListener("click", (e) => {
    const clickTarget = e.target;
    if (clickTarget.tagName === "IMG") clickTarget.focus();   
})

// onClick Functions

function onBtnClick() {
    manageGrid(numColumns, numRows);
    shuffleArray(availableCells);
    const { imgLeft, imgTop, newIndex } = getRandomPosition(
      availableCells,
      numColumns,
      numRows,
      mainFrame
    );
    addImage(imgLeft, imgTop, mainFrame, newIndex, () => {
      isAddingImage = false;
    });
    updateGrid(imgLeft, imgTop, numColumns, numRows, newIndex);
  }