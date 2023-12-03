const imgElement = document.getElementById("fading-image");
const images = [
  "assets/img/gallery/1.jpg",
  "assets/img/gallery/2.jpg",
  "assets/img/gallery/3.jpg",
  "assets/img/gallery/4.jpg",
  "assets/img/gallery/5.jpg",
  "assets/img/gallery/6.jpg",
  "assets/img/gallery/7.jpg",
  "assets/img/gallery/8.jpg",
];

window.setInterval(changePicture, 5000);
let i = 0;
function changePicture() {
  i++;

  if (i > images.length - 1) i = 0;

  imgElement.src = images[i];
}
