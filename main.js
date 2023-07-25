import { addImage } from "./modules/add-img.mjs";
import { manageGrid, availableCells } from "./modules/manage-grid.mjs";
import { getRandomPosition } from "./modules/random-posit.mjs";
import { updateImagePosition } from "./modules/update-img-pos.mjs";
import { moveImage } from "./modules/move-img.mjs";

const mainFrame = document.getElementById("main-frame");
const plusBtn = document.querySelector("button");
const numColumns = 10;
const numRows = 5;
let isAddingImage = false;

plusBtn.addEventListener("click", () => {
  plusBtn.blur();
  if (!isAddingImage) {
    isAddingImage = true;
    onBtnClick();
  }
});

function onBtnClick() {
  manageGrid(numColumns, numRows);

  const { imgLeft, imgTop } = getRandomPosition(
    availableCells,
    numColumns,
    numRows,
    mainFrame
  );

  addImage(imgLeft, imgTop, mainFrame, () => {
    isAddingImage = false;
  });
}


document.addEventListener("keydown", (event) => {
    const updatedPosition = moveImage(event);
    if (updatedPosition) {
      console.log("Updated Top:", updatedPosition.top, "Updated Left:", updatedPosition.left);
    }
});

  

