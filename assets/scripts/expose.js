// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // 1. Initialize the Confetti library
  const jsConfetti = new JSConfetti();

  // 2. Grab all the HTML elements we need to interact with
  const hornSelect = document.getElementById('horn-select');
  const mainImage = document.querySelector('img[alt="No image selected"]'); 
  const audioElement = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('img[alt="Volume level 2"]'); 
  const playButton = document.querySelector('button');

  // 3. Dropdown Event Listener
  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
  
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
  volumeSlider.addEventListener('input', (event) => {
    const volumeValue = parseInt(event.target.value);
    audioElement.volume = volumeValue / 100;

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
  playButton.addEventListener('click', () => {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}