import { updateImagePosition } from './update-img-pos.mjs';

let latestPic;
const allPics = [];

const addImage = (img, left, top, container, callback) => {
  const figurePic = document.createElement("img");
  figurePic.src = URL.createObjectURL(img);
  container.appendChild(figurePic);

  allPics.push(figurePic);
  latestPic = allPics[allPics.length - 1];
  latestPic.style.left = `${left}px`;
  latestPic.style.top = `${top}px`;
  latestPic.tabIndex = 0;
  latestPic.focus();

  // updateImagePosition(latestPic, top, left, container);

  // latestPic.addEventListener('keydown', function(event) {
  //   switch (event.key) {
  //     case 'ArrowUp':
  //       latestPic.style.top = latestPic.offsetTop - 20 + 'px';
  //       updateImagePosition(latestPic, latestPic.offsetTop, latestPic.offsetLeft, container);
  //       break;
  //     case 'ArrowRight':
  //       latestPic.style.left = latestPic.offsetLeft + 20 + 'px';
  //       updateImagePosition(latestPic, latestPic.offsetTop, latestPic.offsetLeft, container);
  //       break;
  //     case 'ArrowDown':
  //       latestPic.style.top = latestPic.offsetTop + 20 + 'px';
  //       updateImagePosition(latestPic, latestPic.offsetTop, latestPic.offsetLeft, container);
  //       break;
  //     case 'ArrowLeft':
  //       latestPic.style.left = latestPic.offsetLeft - 20 + 'px';
  //       updateImagePosition(latestPic, latestPic.offsetTop, latestPic.offsetLeft, container);
  //       break;
  //   }
  // });

  if (typeof callback === 'function') callback();
};

export { addImage };

