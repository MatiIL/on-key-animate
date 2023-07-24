let latestPic;

const addImage = (left, top) => {
  const mainFrame = document.getElementById("main-frame");
  const figurePic = document.createElement("img");
  figurePic.src = "./dog.jpg";
  // figurePic.className = "new-pic";
  figurePic.style.position = "absolute";
  figurePic.width = 100;
  figurePic.height = 100;
  mainFrame.appendChild(figurePic);
  const allPics = document.getElementsByTagName("img");
  latestPic = allPics[allPics.length - 1];
  latestPic.style.left = `${left}px`;
  latestPic.style.top = `${top}px`;
};

export { addImage };
