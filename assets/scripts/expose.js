// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // 1. Initialize the Confetti library
  // This must be done at the top so it's ready to use when the play button is clicked
  const jsConfetti = new JSConfetti();

  // 2. Grab all the HTML elements we need to interact with
  const hornSelect = document.getElementById('horn-select');
  const mainImage = document.querySelector('img[alt="No image selected"]'); 
  const audioElement = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('img[alt="Volume level 2"]'); 
  const playButton = document.querySelector('button');

  // 3. Dropdown Event Listener
  // Listens for when the user picks a different horn from the dropdown
  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    
    // Update the image and audio source based on what was selected
    if (selectedHorn === 'air-horn') {
      mainImage.src = 'assets/images/air-horn.svg';
      audioElement.src = 'assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      mainImage.src = 'assets/images/car-horn.svg';
      audioElement.src = 'assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      mainImage.src = 'assets/images/party-horn.svg';
      audioElement.src = 'assets/audio/party-horn.mp3';
    }
  });

  // 4. Volume Slider Event Listener
  // Listens for real-time dragging ('input') of the volume slider
  volumeSlider.addEventListener('input', (event) => {
    const volumeValue = parseInt(event.target.value);
    
    // Set the actual audio element volume. 
    // Slider is 0-100, but audio.volume expects 0.0-1.0, so we divide by 100.
    audioElement.volume = volumeValue / 100;

    // Update the volume icon based on the ranges specified in the instructions
    if (volumeValue === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volumeValue >= 1 && volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeValue >= 33 && volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else if (volumeValue >= 67) {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  // 5. Play Button Event Listener
  // Listens for when the user clicks the "Play Sound" button
  playButton.addEventListener('click', () => {
    // Play the audio
    audioElement.play();
    
    // If the currently selected horn is the party horn, shoot confetti!
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}