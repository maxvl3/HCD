document.addEventListener("DOMContentLoaded", function () {
  var uploadInput = document.getElementById("upload-input");

  var uploadedImage = document.getElementById("uploaded-image");

  uploadInput.addEventListener("change", function (e) {
    var file = e.target.files[0];

    var reader = new FileReader();

    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
    };

    reader.readAsDataURL(file);

    uploadInput.style.display = "none";

    uploadedImage.style.display = "block";
    document.getElementById("image-container").style.display = "block";
  });
});






const openBlur = document.querySelector("#blur");
const blurButtons = document.querySelector("#blur-buttons");
const checkButton = document.querySelector("#check");

openBlur.addEventListener("click", function () {
  blurButtons.classList.toggle("active");
});

checkButton.addEventListener("click", function () {
  blurButtons.classList.toggle("active");
});

// Vind de elementen
const decreaseBlurButton = document.getElementById("decrease-blur");
const increaseBlurButton = document.getElementById("increase-blur");
const uploadedImage2 = document.getElementById("uploaded-image");

// Stel de initiële blurwaarde in
let blurAmount = 0;

// Stel de minimale en maximale blurwaarden in
const minBlurAmount = 0;
const maxBlurAmount = 10;

// Functie om de blurwaarde bij te werken
function updateBlur() {
  uploadedImage2.style.filter = `blur(${blurAmount}px)`;
}

// Event listener voor het verlagen van de blurwaarde
decreaseBlurButton.addEventListener("touchstart", function (event) {
  event.preventDefault(); // Voorkom standaardgedrag van touchstart-gebeurtenis op mobiele apparaten

  if (blurAmount > minBlurAmount) {
    blurAmount--;
    updateBlur();
  }
});

// Event listener voor het verhogen van de blurwaarde
increaseBlurButton.addEventListener("touchstart", function (event) {
  event.preventDefault(); // Voorkom standaardgedrag van touchstart-gebeurtenis op mobiele apparaten

  if (blurAmount < maxBlurAmount) {
    blurAmount++;
    updateBlur();
  }
});














const openOpacity = document.querySelector("#opacity");
const opacityButtons = document.querySelector("#opacity-buttons");
const checkOpacityButton = document.querySelector("#check-opacity");

openOpacity.addEventListener("click", function () {
  opacityButtons.classList.toggle("active");
});

checkOpacityButton.addEventListener("click", function () {
  opacityButtons.classList.toggle("active");
});

// Find the elements
const decreaseOpacityButton = document.getElementById("decrease-opacity");
const increaseOpacityButton = document.getElementById("increase-opacity");

// Set the initial opacity value
let opacityAmount = 1;

// Set the minimum and maximum opacity values
const minOpacityAmount = 0;
const maxOpacityAmount = 1;

// Function to update the opacity value
function updateOpacity() {
  uploadedImage2.style.opacity = opacityAmount;
}

// Event listener for decreasing the opacity value
decreaseOpacityButton.addEventListener("touchstart", function (event) {
  event.preventDefault(); // Prevent default touchstart behavior on mobile devices

  if (opacityAmount > minOpacityAmount) {
    opacityAmount -= 0.1;
    opacityAmount = Math.round(opacityAmount * 10) / 10; // Round to one decimal place
    updateOpacity();
  }
});

// Event listener for increasing the opacity value
increaseOpacityButton.addEventListener("touchstart", function (event) {
  event.preventDefault(); // Prevent default touchstart behavior on mobile devices

  if (opacityAmount < maxOpacityAmount) {
    opacityAmount += 0.1;
    opacityAmount = Math.round(opacityAmount * 10) / 10; // Round to one decimal place
    updateOpacity();
  }
});














const openZoom = document.querySelector("#zoom");
const zoomButtons = document.querySelector("#zoom-buttons");
const checkZoomButton = document.querySelector("#check-zoom");

openZoom.addEventListener("click", function () {
  zoomButtons.classList.toggle("active");
});

checkZoomButton.addEventListener("click", function () {
  zoomButtons.classList.toggle("active");
});

// Find the elements
const decreaseZoomButton = document.getElementById("decrease-zoom");
const increaseZoomButton = document.getElementById("increase-zoom");

// Set the initial zoom value
let zoomAmount = 100;

// Set the minimum and maximum zoom values
const minZoomAmount = 50;
const maxZoomAmount = 200;

// Function to update the zoom value
function updateZoom() {
  uploadedImage2.style.transform = `scale(${zoomAmount / 100})`;
}

// Event listener for decreasing the zoom value
decreaseZoomButton.addEventListener("touchstart", function (event) {
  event.preventDefault(); // Prevent default touchstart behavior on mobile devices

  if (zoomAmount > minZoomAmount) {
    zoomAmount -= 10;
    updateZoom();
  }
});

// Event listener for increasing the zoom value
increaseZoomButton.addEventListener("touchstart", function (event) {
  event.preventDefault(); // Prevent default touchstart behavior on mobile devices

  if (zoomAmount < maxZoomAmount) {
    zoomAmount += 10;
    updateZoom();
  }
});



















const openBorder = document.querySelector("#border");
const borderButtons = document.querySelector("#border-buttons");
const checkBorderButton = document.querySelector("#check-border");

openBorder.addEventListener("click", function () {
  borderButtons.classList.toggle("active");
});

checkBorderButton.addEventListener("click", function () {
  borderButtons.classList.toggle("active");
});

// Find the elements
const decreaseBorderButton = document.getElementById("decrease-border");
const increaseBorderButton = document.getElementById("increase-border");

// Set the initial border radius value
let borderRadiusAmount = 0;

// Set the minimum and maximum border radius values
const minBorderRadiusAmount = 0;
const maxBorderRadiusAmount = 50;

// Function to update the border radius value
function updateBorderRadius() {
  uploadedImage2.style.borderRadius = `${borderRadiusAmount * 10}%`;
}

// Event listener for decreasing the border radius value
decreaseBorderButton.addEventListener("touchstart", function (event) {
  event.preventDefault(); // Prevent default touchstart behavior on mobile devices

  if (borderRadiusAmount > minBorderRadiusAmount) {
    borderRadiusAmount--;
    updateBorderRadius();
  }
});

// Event listener for increasing the border radius value
increaseBorderButton.addEventListener("touchstart", function (event) {
  event.preventDefault(); // Prevent default touchstart behavior on mobile devices

  if (borderRadiusAmount < maxBorderRadiusAmount) {
    borderRadiusAmount++;
    updateBorderRadius();
  }
});
