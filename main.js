import { addImage } from "./modules/add-img.mjs";
import { setupGrid, availableCells } from "./modules/setup-grid.mjs";
import { getRandomPosition } from "./modules/random-posit.mjs";
import { moveImage } from "./modules/move-img.mjs";
import { updateImagePosition } from "./modules/update-img-pos.mjs";
import { updateGrid } from "./modules/update-grid.mjs";
import { shuffleArray } from "./modules/utils.mjs";

//Global Variables

const mainFrame = document.getElementById("main-frame");
const fileUploadInput = document.getElementById("file-upload");
const numColumns = 10;
const numRows = 5;
let isAddingImage = false;
let topOnStop, leftOnStop;

setupGrid(numColumns, numRows);

// Event Listeners

document.addEventListener("click", (e) => {
  const clickTarget = e.target;
  if (clickTarget.tagName === "IMG") clickTarget.focus();
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
    if (!isNaN(newIndex)) {
      updateGrid(imgNewLeft, imgNewTop, numColumns, numRows, newIndex);
    }
  }
});

fileUploadInput.addEventListener("change", handleFileUpload);

// Image Upload and Positioning Functions

function handleFileUpload() {
    const uploadedImg = fileUploadInput.files[0];
    if (uploadedImg) {
      fileUploadInput.blur();
      if (!isAddingImage) {
              isAddingImage = true;
              addImgToGrid(uploadedImg);
            }
      fileUploadInput.value = "";
    }
  }

  function addImgToGrid(img) {
    const { imgLeft, imgTop, randomIndex } = getRandomPosition(
      availableCells,
      numColumns,
      numRows,
      mainFrame
    );
    shuffleArray(availableCells);
    addImage(img, imgLeft, imgTop, mainFrame, randomIndex); 
      isAddingImage = false;
  }