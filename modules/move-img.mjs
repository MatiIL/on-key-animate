const moveImage = (event) => {
  const focusedImg = document.activeElement;

  if (event !== undefined) {
    switch (event.key) {
      case "ArrowUp":
        focusedImg.style.top = parseInt(focusedImg.style.top) - 20 + "px";
        break;
      case "ArrowRight":
        focusedImg.style.left = parseInt(focusedImg.style.left) + 20 + "px";
        break;
      case "ArrowDown":
        focusedImg.style.top = parseInt(focusedImg.style.top) + 20 + "px";
        break;
      case "ArrowLeft":
        focusedImg.style.left = parseInt(focusedImg.style.left) - 20 + "px";
        break;
    }
    return { top: focusedImg.style.top, left: focusedImg.style.left };
  }
};

export { moveImage };
