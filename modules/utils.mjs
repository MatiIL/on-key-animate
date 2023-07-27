const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

const cellDimensionsCalc = (container, columns, rows) => {
  const cellWidth = container.clientWidth / columns;
  const cellHeight = container.clientHeight / rows;
  return { cellWidth, cellHeight }
}

const imgPositionCalc = (idx, columns) => {
  const row = Math.floor(idx / columns);
  const col = idx % columns;
  return { row, col }
}

const imgTopLeftCalc = (col, row, cellWidth, cellHeight) => {
  const imgLeft = Math.floor(col * cellWidth);
  const imgTop = Math.floor(row * cellHeight);
  return { imgLeft, imgTop }
}

export { shuffleArray, cellDimensionsCalc, imgPositionCalc, imgTopLeftCalc }
  