# Horizontify Canva

A browser extension that transforms Canva's page navigation from horizontal scroll to vertical layout.

## Features

- **Vertical Page Navigation**: Switch from Canva's default horizontal page scroll to a more intuitive vertical layout
- **Easy to Use**: Simply install and enable the extension in your Canva editor
- **Lightweight**: Minimal footprint with no impact on Canva's performance

### Demo

## Installation

### Option 1 — Download only the extension folder (recommended)

Run this single command to download **only** the `Horizontify` extension folder (no extra files):

```bash
git clone --filter=blob:none --sparse https://github.com/salvatorecastellitti/canva-horizontal-pages.git && cd canva-horizontal-pages && git sparse-checkout set Horizontify
```

The extension will be inside the `canva-horizontal-pages/Horizontify` folder.

> **No git?** You can also use [npx degit](https://github.com/Rich-Harris/degit) (requires Node.js):
>
> ```bash
> npx degit salvatorecastellitti/canva-horizontal-pages/Horizontify Horizontify
> ```

### Option 2 — Clone the full repository

```bash
git clone https://github.com/salvatorecastellitti/canva-horizontal-pages.git
```

---

### Load the extension in your browser

1. Open your browser's extension management page:
   - **Chrome / Edge / Brave**: `chrome://extensions`
   - **Arc**: Extensions → Manage Extensions
2. Enable **Developer Mode** (toggle in the top-right corner)
3. Click **"Load Unpacked"** and select the `Horizontify` folder

## Usage

Once installed, the extension will automatically apply the vertical layout when you open Canva's design editor.

## Follow

If you find this extension useful, consider following on X: [@castedev](https://x.com/castedev)

## Disclaimer

**Horizontify Canva is not affiliated with, endorsed by, or sponsored by Canva Pty Ltd.** This extension is an independent project created to enhance the user experience for Canva users. All trademarks and brand names are the property of their respective owners.

## Contributing

Feel free to submit issues or pull requests to improve this extension.
