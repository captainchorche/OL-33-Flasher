const flashEl   = document.getElementById("flashEl");   // <esp-web-install-button>
const flashBtn  = document.getElementById("flashBtn");  // slotted button
const flashHint = document.getElementById("flashHint");

// Single-firmware manifest
const manifestUrl = './manifests/single.json';

// Wire the esp-web-install-button to the single manifest and enable the button.
if (flashEl) {
  flashEl.setAttribute('manifest', manifestUrl);
}
if (flashBtn) {
  flashBtn.disabled = false;
  flashBtn.removeAttribute('disabled');
}
if (flashHint) {
  flashHint.textContent = 'Ready: Click Flash.';
}