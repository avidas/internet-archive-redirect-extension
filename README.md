# Chrome Archive Redirect

A Chrome extension that redirects the current page to its most recent snapshot on archive.is.

## Features

- Adds a toolbar icon to Chrome
- When clicked, redirects the current tab to the archived version of the page on archive.is
- Skips non-standard pages like chrome:// URLs and about: pages

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the extension directory
5. The Archive Redirect icon should now appear in your toolbar

## Usage

1. Navigate to any webpage you want to view an archived version of
2. Click the Archive Redirect icon in the toolbar
3. The tab will redirect to the most recent archived snapshot on archive.is

## Technical Details

- Built with Manifest V3
- Uses minimal permissions (only activeTab and access to archive.is)
- Simple background script handles the redirection logic

## Note

Before using this extension, you'll need to add icon images to the `images` folder:
- icon16.png (16x16 pixels)
- icon48.png (48x48 pixels)
- icon128.png (128x128 pixels)