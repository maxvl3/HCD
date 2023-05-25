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
