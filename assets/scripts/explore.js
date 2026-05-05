// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img[alt="Smiling face"]');

  let voices = [];

  // 1. Function to load voices into the dropdown
  function populateVoiceList() {
    voices = synth.getVoices();
    
    // Loop through all available voices and create an <option> for each
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // Some browsers need this event listener to load voices properly
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // 2. Play Button Event Listener
  talkButton.addEventListener('click', () => {
    // Create the speech object with the text from the textarea
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    
    // Find the voice the user selected and attach it to the speech object
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    // 3. Face Animation Event Listeners
    // When the voice starts, change the image to open mouth
    utterThis.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    // When the voice finishes, change the image back to smiling
    utterThis.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    // Speak!
    synth.speak(utterThis);
  });
}