function captureSelectedOption() {
  var selectElement = document.getElementById("resPicker");
  var selectedValue = selectElement.value;

  // Get the media container, image, video, and text elements
  var mediaContainer = document.getElementById("mediaContainer");
  var imageElement = document.getElementById("resolutionImage");
  var videoElement = document.getElementById("resolutionVideo");
  var pageTitleElement = document.getElementById("pageTitle");
  var audioElement = document.createElement("audio"); // Create audio element

  // Define the audio source for 1080p selection
  audioElement.src = "./assets/myLove.mp3";
  audioElement.autoplay = true;
  audioElement.loop = true;
  audioElement.volume = 1; // Adjust volume as needed

  // Set the media source and display text based on the selected value
  if (selectedValue === "144p") {
    imageElement.src = "./assets/world144.jpg";
    imageElement.classList.remove("hidden");
    videoElement.classList.add("hidden");
    pageTitleElement.classList.add("hidden");
    mediaContainer.classList.remove("hidden");
    audioElement.pause(); // Pause music for non-1080p selections
  } else if (selectedValue === "240p") {
    imageElement.src = "./assets/world240.png";
    imageElement.classList.remove("hidden");
    videoElement.classList.add("hidden");
    pageTitleElement.classList.add("hidden");
    mediaContainer.classList.remove("hidden");
    audioElement.pause(); // Pause music for non-1080p selections
  } else if (selectedValue === "360p") {
    imageElement.src = "./assets/world360.jpg";
    imageElement.classList.remove("hidden");
    videoElement.classList.add("hidden");
    pageTitleElement.classList.add("hidden");
    mediaContainer.classList.remove("hidden");
    audioElement.pause(); // Pause music for non-1080p selections
  } else if (selectedValue === "480p") {
    imageElement.src = "./assets/world480.png";
    imageElement.classList.remove("hidden");
    videoElement.classList.add("hidden");
    pageTitleElement.classList.add("hidden");
    mediaContainer.classList.remove("hidden");
    audioElement.pause(); // Pause music for non-1080p selections
  } else if (selectedValue === "720p") {
    imageElement.src = "./assets/world720.jpg";
    imageElement.classList.remove("hidden");
    videoElement.classList.add("hidden");
    pageTitleElement.classList.add("hidden");
    mediaContainer.classList.remove("hidden");
    audioElement.pause(); // Pause music for non-1080p selections
  } else if (selectedValue === "1080p") {
    videoElement.src = "./assets/world1080.mp4";
    videoElement.classList.remove("hidden");
    imageElement.classList.add("hidden");
    pageTitleElement.classList.remove("hidden");
    mediaContainer.classList.remove("hidden");
    audioElement.play(); // Play music for 1080p selection
  } else {
    mediaContainer.classList.add("hidden");
    audioElement.pause(); // Pause music for no selection
  }
}
