import { updateImagePosition } from './update-img-pos.mjs';
import { availableCells, occupiedCells } from './manage-grid.mjs';

let latestPic;
const allPics = [];

const addImage = (left, top, container, callback) => {
  const figurePic = document.createElement('img');
  figurePic.src = './dog.jpg';
  figurePic.style.position = 'absolute';
  figurePic.width = 100;
  figurePic.height = 100;
  container.appendChild(figurePic);

  allPics.push(figurePic);
  latestPic = allPics[allPics.length - 1];
  latestPic.style.left = `${left}px`;
  latestPic.style.top = `${top}px`;
  latestPic.tabIndex = 0;
  latestPic.focus();

  updateImagePosition(
    latestPic, 
    parseInt(latestPic.style.top), 
    parseInt(latestPic.style.left), 
    container,
    occupiedCells,
    availableCells
    );

  latestPic.addEventListener('keydown', function (event) {
    switch (event.key) {
      case 'ArrowUp':
        latestPic.style.top = `${latestPic.offsetTop - 20}px`;
        tryAddingImage(latestPic, parseInt(latestPic.style.top),
        parseInt(latestPic.style.left), container, availableCells);
        break;
      case 'ArrowRight':
        latestPic.style.left = `${latestPic.offsetLeft + 20}px`;
        tryAddingImage(latestPic, parseInt(latestPic.style.top),
        parseInt(latestPic.style.left), container, availableCells);
        break;
      case 'ArrowDown':
        latestPic.style.top = `${latestPic.offsetTop + 20}px`;
        tryAddingImage(latestPic, parseInt(latestPic.style.top),
        parseInt(latestPic.style.left), container, availableCells);
        break;
      case 'ArrowLeft':
        latestPic.style.left = `${latestPic.offsetLeft - 20}px`;
        tryAddingImage(latestPic, parseInt(latestPic.style.top),
        parseInt(latestPic.style.left), container, availableCells);
        break;
    }
  });

  if (typeof callback === 'function') callback();
};

function tryAddingImage(imgElement, top, left, container, availableCells) {
  const numColumns = 8;
  const numRows = 4;
  const cellWidth = container.clientWidth / numColumns;
  const cellHeight = container.clientHeight / numRows;

  const occupiedIndex = Math.floor(top / cellHeight) * numColumns + Math.floor(left / cellWidth);

  const isOverlapping = allPics.some((pic, index) => {
    if (pic === imgElement) return false; // Skip the current image
    const rect1 = imgElement.getBoundingClientRect();
    const rect2 = pic.getBoundingClientRect();
    return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
  });

  if (!occupiedCells[occupiedIndex] && !isOverlapping) {
    occupiedCells[occupiedIndex] = true;
    availableCells = availableCells.filter(index => index !== occupiedIndex);
    return true;
  } else {
    // If overlap or invalid position, remove the image
    container.removeChild(imgElement);
    console.error("Unable to find a non-overlapping position for the image.");
    return false;
  }
}

export { addImage };

