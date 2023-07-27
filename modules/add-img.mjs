let latestPic;
const allPics = [];

const addImage = (img, left, top, container, index) => {

  const figurePic = document.createElement("img");
  figurePic.setAttribute("data-random-index", index);
  figurePic.src = URL.createObjectURL(img);
  container.appendChild(figurePic);
  allPics.push(figurePic);
  latestPic = allPics[allPics.length - 1];
  latestPic.tabIndex = 0;
  latestPic.style.left = `${left}px`;
  latestPic.style.top = `${top}px`;
  latestPic.focus();
  
};

export { addImage };

