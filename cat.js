const bulbImage = document.getElementById("buldImage");
const catImage = document.getElementById("catImage");
const switchBoardHeading = document.getElementById("switchBoardHeading");
const switchOff = document.getElementById("switchOff");
const switchOn = document.getElementById("switchOn");
function switchOFF() {
  bulbImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  catImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  switchBoardHeading.textContent = "Switched Off";
  switchOff.style.backgroundColor = "#968383";
  switchOn.style.backgroundColor = "#4aff53";
}
function switchON() {
  bulbImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  catImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  switchBoardHeading.textContent = "Switched On";
  switchOff.style.backgroundColor = "#ff1d19";
  switchOn.style.backgroundColor = "#968383";
}
