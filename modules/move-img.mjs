const mainFrame = document.getElementById("main-frame");

const moveImage = (event) => {
  const focusedImg = document.activeElement;
  const imageWidth = 100;
  const imageHeight = 100;

  if (event !== undefined) {
    switch (event.key) {
      case "ArrowUp":
        const newTopUp = parseInt(focusedImg.style.top) - 20;
        if (newTopUp >= 0) focusedImg.style.top = `${newTopUp}px`;
        break;
      case "ArrowRight":
        const newLeftRight = parseInt(focusedImg.style.left) + 20;
        const maxLeftRight = mainFrame.clientWidth - imageWidth;
        if (newLeftRight <= maxLeftRight) focusedImg.style.left = `${newLeftRight}px`;
        break;
      case "ArrowDown":
        const newTopDown = parseInt(focusedImg.style.top) + 20;
        const maxTopDown = mainFrame.clientHeight - imageHeight;
        if (newTopDown <= maxTopDown) focusedImg.style.top = `${newTopDown}px`;
        break;
      case "ArrowLeft":
        const newLeftLeft = parseInt(focusedImg.style.left) - 20;
        if (newLeftLeft >= 0) focusedImg.style.left = `${newLeftLeft}px`;
        break;
    }
    return { top: focusedImg.style.top, left: focusedImg.style.left };
  }
};

export { moveImage };
