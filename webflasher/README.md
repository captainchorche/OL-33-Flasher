This folder is a local copy of the `webflasher` subfolder from the geo-tp/ESP32-Bus-Pirate repo.

What I copied:
- index.html, style.css, scripts.js
- manifests/*.json (these reference firmware binaries hosted remotely)
- empty `firmwares/` folder (firmware .bin files were not copied)

Next steps you can take (single-firmware mode):

-- Place your firmware binary at `webflasher/firmwares/esp32fw.bin`.
-- The UI is configured to use `manifests/single.json` which points to `./firmwares/esp32fw.bin`.

Run locally (macOS):

python3 -m http.server 8000

Then open in your browser (use localhost so Web Serial is allowed):

http://localhost:8000/webflasher/index.html

If you prefer a different filename or remote URL, edit `webflasher/manifests/single.json` and change the `path` value.