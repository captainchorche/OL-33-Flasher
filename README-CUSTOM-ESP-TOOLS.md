# Custom ESP Web Tools

This branch uses a custom build of `esp-web-tools` with modified flash dialog messages.

## Changes Made

### Modified Messages in Flash Dialog:
- "Initializing..." → "Connecting to device..."
- "Preparing installation..." → "Loading firmware..."
- "Installation prepared" → "Firmware loaded"
- "Erasing device..." → "Clearing memory..."
- "Device erased" → "Memory cleared"
- "Writing progress: X%" → "Flashing firmware: X%"
- "Writing complete" → "Firmware flashed successfully"
- "All done!" → "Complete!"

## How It Works

The custom build is located in `./lib/esp-web-tools/` and is loaded via:
```html
<script type="module" src="./lib/esp-web-tools/install-button.js?module"></script>
```

## GitHub Pages Deployment

This branch is automatically deployed to GitHub Pages via GitHub Actions workflow (`.github/workflows/deploy-pages.yml`).

**To enable GitHub Pages:**
1. Go to repository Settings → Pages
2. Under "Build and deployment":
   - Source: "GitHub Actions"
3. Push this branch to trigger deployment:
   ```bash
   git push -u origin custom-esp-web-tools
   ```

The site will be available at: `https://captainchorche.github.io/OL-33-Flasher/`

## Switching Between Branches

**To use custom version:**
```bash
git checkout custom-esp-web-tools
```

**To use CDN version (main branch):**
```bash
git checkout main
```

## Rebuilding the Custom Module

If you need to modify messages again:

1. Clone the esp-web-tools repo:
   ```bash
   git clone https://github.com/esphome/esp-web-tools.git temp-esp-web-tools
   ```

2. Modify texts in:
   - `temp-esp-web-tools/src/flash.ts`
   - `temp-esp-web-tools/src/install-dialog.ts`

3. Build:
   ```bash
   cd temp-esp-web-tools
   npm install
   npm run prepublishOnly
   ```

4. Copy files:
   ```bash
   cp -r dist/web/* ../lib/esp-web-tools/
   ```

5. Clean up:
   ```bash
   rm -rf temp-esp-web-tools
   ```

