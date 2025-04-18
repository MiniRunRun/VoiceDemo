const textDisplay = document.getElementById('overlay');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';


recognition.interimResults = true;
recognition.continuous = true;
// interimResults: Shows words as you’re speaking, even before you’re done.
// ✅ continuous: Keeps listening until you manually stop it (great for interactive demos!).


recognition.onresult = function(event) {
    const transcript = event.results[event.results.length - 1][0].transcript;
    textDisplay.textContent = transcript;
};
// event.results is an array of what the system thinks you said.
// event.results.length - 1 grabs the most recent recognition.
// [0].transcript grabs the actual spoken text.
// textDisplay.textContent = transcript; updates the <h2> element on the page.

recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};
// If anything goes wrong (e.g., no microphone), this will log the error in the browser’s console.

recognition.start();
// This starts the speech recognition engine.
// Once you load the page, it’ll start listening right away!
