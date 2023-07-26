let latestPic;
const allPics = [];

const addImage = (img, left, top, container, callback) => {
  const figurePic = document.createElement("img");
  figurePic.src = "./dog.jpg";
  figurePic.style.position = "absolute";
  figurePic.width = 100;
  figurePic.height = 100;
  figurePic.setAttribute("data-random-index", randomIndex);
  figurePic.style.left = `${left}px`;
  figurePic.style.top = `${top}px`;
  figurePic.src = URL.createObjectURL(img);
  container.appendChild(figurePic);

  allPics.push(figurePic);
  latestPic = allPics[allPics.length - 1];
  latestPic.tabIndex = 0;
  latestPic.focus();

  if (typeof callback === 'function') callback();
};

export { addImage };

