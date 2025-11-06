let speech;
let voices = [];

function loadVoices() {
  voices = window.speechSynthesis.getVoices();
}

window.speechSynthesis.onvoiceschanged = loadVoices;

function getVietnameseVoice() {
  return voices.find(voice => voice.lang.startsWith('vi'));
}

function readContent() {
  const elements = document.querySelectorAll('h1, h2, h3, p');
  let text = '';
  elements.forEach(el => {
    text += el.innerText + '. ';
  });

  window.speechSynthesis.cancel();

  speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'vi-VN';
  speech.voice = getVietnameseVoice() || null;
  speech.pitch = 1;
  speech.rate = 1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
}

function stopReading() {
  window.speechSynthesis.cancel();
}
