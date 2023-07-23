const plusBtn = document.querySelector("button");
const mainFrame = document.getElementById("main-frame");
const existingImages = Array.from(mainFrame.querySelectorAll("img"));

function addImage() {
  plusBtn.addEventListener("click", () => {
    const figurePic = document.createElement("img");
    figurePic.src = "./dog.jpg";
    figurePic.style.position = "absolute";
    figurePic.width = 100;
    figurePic.height = 100;

    const numColumns = 8;
    const numRows = 4;
    const numCells = numColumns * numRows;

    const occupiedCells = Array(numCells).fill(false);
    let availableCells = [];
    for (let i = 0; i < numCells; i++) {
      if (!occupiedCells[i]) {
        availableCells.push(i);
      }
    }

    const randomIndex =
      availableCells[Math.floor(Math.random() * availableCells.length)];
    occupiedCells[randomIndex] = true;

    const row = Math.floor(randomIndex / numColumns);
    const col = randomIndex % numColumns;

    const cellWidth =
      (mainFrame.clientWidth - (numColumns - 1) * 3) / numColumns;
    const cellHeight = (mainFrame.clientHeight - (numRows - 1) * 3) / numRows;
    const imgLeft = col * (cellWidth + 3);
    const imgTop = row * (cellHeight + 3);

    figurePic.style.left = `${imgLeft}px`;
    figurePic.style.top = `${imgTop}px`;
    mainFrame.appendChild(figurePic);
  });
}

addImage();
