// Haal de elementen op
const uploadInput = document.getElementById('upload');
const imageSection = document.querySelector('.image-section');
const toolsSection = document.querySelector('.tools-section');
const imageContainer = document.querySelector('.image-container');
const uploadedImage = document.getElementById('uploaded-image');

// Verberg de imageSection en toolsSection
imageSection.style.visibility = 'hidden';
toolsSection.style.display = 'none';

// Voeg een eventlistener toe om het uploaden van de afbeelding te detecteren
uploadInput.addEventListener('change', function(event) {

  // Controleer of er een afbeelding is geselecteerd
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    // Wanneer de afbeelding is geladen, update de src van het img element
    reader.onload = function(e) {
      uploadedImage.src = e.target.result;
    };

    // Lees de afbeelding als een DataURL
    reader.readAsDataURL(event.target.files[0]);

    // Toon de imageSection en toolsSection
    imageSection.style.visibility = 'visible';
    toolsSection.style.display = 'block';

    // Verberg de upload knop
    uploadInput.style.display = 'none';
  }
});




function toggleRatio() {
  const ratioElement = document.querySelector('.ratio-container');
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
  const zoomElement = document.querySelector('.zoom-container');
  zoomElement.classList.toggle("active");
}

// Functie om de zoom van de afbeelding aan te passen
function adjustZoom() {
  var zoomRange = document.getElementById("zoomRange"); // Range slider element

  var zoomValue = zoomRange.value; // Waarde van de range slider

  var scale = 1 + (zoomValue / 100); // Bereken de schaalwaarde

  uploadedImage.style.transform = "scale(" + scale + ")"; // Pas de zoom van de afbeelding aan
}

// Event listener voor het wijzigen van de range slider
var zoomRange = document.getElementById("zoomRange");
zoomRange.addEventListener("input", adjustZoom);

// Stel de standaardwaarde van de range slider in op het minimale zoomniveau (0)
zoomRange.value = 0;
adjustZoom(); // Pas de zoom van de afbeelding toe op basis van de standaardwaarde









function toggleRotate() {
  const rotateElement = document.querySelector('.rotate-container');
  rotateElement.classList.toggle("active");
}

// Functie om de rotatie van de afbeelding aan te passen
function adjustRotation() {
  var rotateRange = document.getElementById("rotateRange"); // Range slider element

  var rotationValue = rotateRange.value; // Waarde van de range slider

  // Bereken de rotatie in graden op basis van de waarde van de range slider
  var rotationDegrees = (rotationValue - 50) * 3.6;

  uploadedImage.style.transform = "rotate(" + rotationDegrees + "deg)"; // Pas de rotatie van de afbeelding aan
}

// Event listener voor het wijzigen van de range slider
var rotateRange = document.getElementById("rotateRange");
rotateRange.addEventListener("input", adjustRotation);

// Stel de standaardwaarde van de range slider in op het midden
rotateRange.value = 50;
adjustRotation(); // Pas de rotatie van de afbeelding toe op basis van de standaardwaarde








function toggleContrast() {
  const contrastElement = document.querySelector('.contrast-container');
  contrastElement.classList.toggle("active");
}

// Functie om het contrast van de afbeelding aan te passen
function adjustContrast() {
  var contrastRange = document.getElementById("contrastRange"); // Range slider element

  var contrastValue = contrastRange.value; // Waarde van de range slider

  // Bereken de contrastwaarde op basis van de waarde van de range slider
  var contrast = ((contrastValue - 50) / 50) * 100 + 100;

  uploadedImage.style.filter = "contrast(" + contrast + "%)"; // Pas het contrast van de afbeelding aan
}

// Event listener voor het wijzigen van de range slider
var contrastRange = document.getElementById("contrastRange");
contrastRange.addEventListener("input", adjustContrast);

// Stel de standaardwaarde van de range slider in het midden
contrastRange.value = 50;
adjustContrast(); // Pas het contrast van de afbeelding toe op basis van de standaardwaarde







function toggleBrightness() {
  const brightnessElement = document.querySelector('.brightness-container');
  brightnessElement.classList.toggle("active");
}

// Functie om de helderheid van de afbeelding aan te passen
function adjustBrightness() {
  var brightnessRange = document.getElementById("brightnessRange"); // Range slider element

  var brightnessValue = brightnessRange.value; // Waarde van de range slider

  // Bereken de helderheid op basis van de waarde van de range slider
  var brightness = ((brightnessValue - 50) / 50) * 100 + 100;

  uploadedImage.style.filter = "brightness(" + brightness + "%)"; // Pas de helderheid van de afbeelding aan
}

// Event listener voor het wijzigen van de range slider
var brightnessRange = document.getElementById("brightnessRange");
brightnessRange.addEventListener("input", adjustBrightness);

// Stel de standaardwaarde van de range slider in het midden
brightnessRange.value = 50;
adjustBrightness(); // Pas de helderheid van de afbeelding toe op basis van de standaardwaarde


  // Vind de Save knop op basis van het ID
  const saveButton = document.getElementById("save-button");

  // Voeg een klikgebeurtenisluisteraar toe aan de knop
  saveButton.addEventListener("click", function() {
    // Verkrijg de afbeeldings-URL
    const imageUrl = "images/test.jpeg";

    // Maak een tijdelijke ankerlink
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "test.jpeg";

    // Voeg de ankerlink toe aan het document en simuleer een klik
    document.body.appendChild(link);
    link.click();

    // Verwijder de ankerlink uit het document
    document.body.removeChild(link);
  });