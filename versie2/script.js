const uploadInput = document.getElementById("upload");
const imageSection = document.querySelector(".image-section");
const toolsSection = document.querySelector(".tools-section");
const imageContainer = document.querySelector(".image-container");
const uploadedImage = document.getElementById("uploaded-image");

imageSection.style.visibility = "hidden";
toolsSection.style.display = "none";

uploadInput.addEventListener("change", function (event) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);

    imageSection.style.visibility = "visible";
    toolsSection.style.display = "block";

    uploadInput.style.display = "none";
  }
});

function toggleRatio() {
  const ratioElement = document.querySelector(".ratio-container");
  ratioElement.classList.toggle("active");
}

function changeRatio916() {
  imageContainer.classList.add("aspect916");
  imageContainer.classList.remove("aspect11", "aspect43", "aspect169");
}

function changeRatio11() {
  imageContainer.classList.add("aspect11");
  imageContainer.classList.remove("aspect916", "aspect43", "aspect169");
}

function changeRatio43() {
  imageContainer.classList.add("aspect43");
  imageContainer.classList.remove("aspect11", "aspect916", "aspect169");
}

function changeRatio169() {
  imageContainer.classList.add("aspect169");
  imageContainer.classList.remove("aspect11", "aspect43", "aspect916");
}

function toggleZoom() {
  const zoomElement = document.querySelector(".zoom-container");
  zoomElement.classList.toggle("active");
}

function adjustZoom() {
  var zoomRange = document.getElementById("zoomRange");

  var zoomValue = zoomRange.value;

  var scale = 1 + zoomValue / 100;

  uploadedImage.style.transform = "scale(" + scale + ")";
}

var zoomRange = document.getElementById("zoomRange");
zoomRange.addEventListener("input", adjustZoom);

zoomRange.value = 0;
adjustZoom();

function toggleRotate() {
  const rotateElement = document.querySelector(".rotate-container");
  rotateElement.classList.toggle("active");
}

function adjustRotation() {
  var rotateRange = document.getElementById("rotateRange");

  var rotationValue = rotateRange.value;

  var rotationDegrees = (rotationValue - 50) * 3.6;

  uploadedImage.style.transform = "rotate(" + rotationDegrees + "deg)";
}

var rotateRange = document.getElementById("rotateRange");
rotateRange.addEventListener("input", adjustRotation);

rotateRange.value = 50;
adjustRotation();

function toggleContrast() {
  const contrastElement = document.querySelector(".contrast-container");
  contrastElement.classList.toggle("active");
}

function adjustContrast() {
  var contrastRange = document.getElementById("contrastRange");

  var contrastValue = contrastRange.value;

  var contrast = ((contrastValue - 50) / 50) * 100 + 100;

  uploadedImage.style.filter = "contrast(" + contrast + "%)";
}

var contrastRange = document.getElementById("contrastRange");
contrastRange.addEventListener("input", adjustContrast);

contrastRange.value = 50;
adjustContrast();

function toggleBrightness() {
  const brightnessElement = document.querySelector(".brightness-container");
  brightnessElement.classList.toggle("active");
}

function adjustBrightness() {
  var brightnessRange = document.getElementById("brightnessRange");

  var brightnessValue = brightnessRange.value;

  var brightness = ((brightnessValue - 50) / 50) * 100 + 100;

  uploadedImage.style.filter = "brightness(" + brightness + "%)";
}

var brightnessRange = document.getElementById("brightnessRange");
brightnessRange.addEventListener("input", adjustBrightness);

brightnessRange.value = 50;
adjustBrightness();

const saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", function () {
  const imageUrl = "images/test.jpeg";

  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = "test.jpeg";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
});
