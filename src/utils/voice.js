import { useRef, useState } from "react";

// Reads text out loud using the browser's built-in speech synthesis.
// Works in any modern browser, no permissions required.
export function speak(text) {
  try {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    window.speechSynthesis.speak(u);
  } catch (e) {
    // speech synthesis not available in this environment — fail silently
  }
}

// Hook for voice input (speech-to-text) via the Web Speech API.
// Needs microphone permission and a Chromium-based browser (Chrome/Edge).
// onResult(transcript) is called when speech is recognised.
// onError(message) is called when recognition isn't available or fails.
export function useVoiceInput(onResult, onError) {
  const recRef = useRef(null);
  const [listening, setListening] = useState(false);

  const start = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      onError("Voice input needs Chrome or Edge with microphone access. Try typing instead.");
      return;
    }
    try {
      const rec = new SR();
      recRef.current = rec;
      rec.lang = "en-IN";
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      rec.onstart = () => setListening(true);
      rec.onresult = (e) => onResult(e.results[0][0].transcript);
      rec.onerror = () => {
        setListening(false);
        onError("Couldn't hear that clearly, or microphone access was blocked. Try typing instead.");
      };
      rec.onend = () => setListening(false);
      rec.start();
    } catch (e) {
      setListening(false);
      onError("Voice input isn't available right now. Try typing instead.");
    }
  };

  return { listening, start };
}
