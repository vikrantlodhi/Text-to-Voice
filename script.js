
function speakText() {
    let text = document.getElementById("textInput").value.trim();
    if (text === "") {
        alert("Please enter some text!");
        return;
    }

    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}