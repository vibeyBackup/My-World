// script.js

function captureSelectedOption() {
  var selectElement = document.getElementById("resPicker");
  var selectedValue = selectElement.value;

  // Get the media container, image, video, and text elements
  var mediaContainer = document.getElementById("mediaContainer");
  var imageElement = document.getElementById("resolutionImage");
  var videoElement = document.getElementById("resolutionVideo");
  var pageTitleElement = document.getElementById("pageTitle");

  // Set the media source and display text based on the selected value
  if (selectedValue === "144p") {
    imageElement.src = "./assets/world144.jpg";
    imageElement.classList.remove("hidden");
    videoElement.classList.add("hidden");
    pageTitleElement.classList.add("hidden");
    mediaContainer.classList.remove("hidden");
  } else if (selectedValue === "240p") {
    imageElement.src = "./assets/world240.png";
    imageElement.classList.remove("hidden");
    videoElement.classList.add("hidden");
    pageTitleElement.classList.add("hidden");
    mediaContainer.classList.remove("hidden");
  } else if (selectedValue === "360p") {
    imageElement.src = "./assets/world360.jpg";
    imageElement.classList.remove("hidden");
    videoElement.classList.add("hidden");
    pageTitleElement.classList.add("hidden");
    mediaContainer.classList.remove("hidden");
  } else if (selectedValue === "480p") {
    imageElement.src = "./assets/world480.png";
    imageElement.classList.remove("hidden");
    videoElement.classList.add("hidden");
    pageTitleElement.classList.add("hidden");
    mediaContainer.classList.remove("hidden");
  } else if (selectedValue === "720p") {
    imageElement.src = "./assets/world720.jpg";
    imageElement.classList.remove("hidden");
    videoElement.classList.add("hidden");
    pageTitleElement.classList.add("hidden");
    mediaContainer.classList.remove("hidden");
  } else if (selectedValue === "1080p") {
    videoElement.src = "./assets/world1080.mp4";
    videoElement.classList.remove("hidden");
    imageElement.classList.add("hidden");
    pageTitleElement.classList.remove("hidden");
    mediaContainer.classList.remove("hidden");
    playMusic(); // Call function to play music for 1080p
  } else {
    mediaContainer.classList.add("hidden");
  }
}

function playMusic() {
  var audio = new Audio("./assets/music.mp3");
  audio.loop = true;
  audio.play();
}
