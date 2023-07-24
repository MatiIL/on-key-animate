import { addImage } from "./modules/add-img.mjs";
import { manageGrid, occupiedCells, availableCells } from "./modules/manage-grid.mjs";
import { getRandomPosition, imgLeft, imgTop } from "./modules/find-posit.mjs";

const mainFrame = document.getElementById("main-frame");
const plusBtn = document.querySelector("button");

function onBtnClick() {
  const numColumns = 8;
  const numRows = 4;
  manageGrid(numColumns, numRows);
  getRandomPosition(availableCells, occupiedCells, numColumns, numRows, mainFrame);
  addImage(imgLeft, imgTop);
}

plusBtn.addEventListener("click", () => {
  onBtnClick();
});

