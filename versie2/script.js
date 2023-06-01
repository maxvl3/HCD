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
