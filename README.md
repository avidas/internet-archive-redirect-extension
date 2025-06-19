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

## Publishing to Chrome Web Store

To publish this extension to the Chrome Web Store:

1. **Prepare the extension package**:
   - Ensure all icon files are present in the `images` folder
   - Test the extension thoroughly in development mode
   - Create a ZIP file containing all extension files (manifest.json, background.js, images folder)

2. **Chrome Developer Dashboard**:
   - Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
   - Sign in with your Google account
   - Pay the one-time $5 developer registration fee (if not already registered)

3. **Upload your extension**:
   - Click "Add new item"
   - Upload your ZIP file
   - Fill out the store listing details:
     - Name: Chrome Archive Redirect
     - Description: A Chrome extension that redirects pages to their archived versions on archive.is
     - Category: Productivity
     - Screenshots: Take screenshots showing the extension in action
     - Privacy policy: Required if you collect user data (this extension doesn't)

4. **Submit for review**:
   - Complete all required fields
   - Submit for review (typically takes 1-3 business days)
   - Address any feedback from the Chrome Web Store team

5. **Publish**:
   - Once approved, click "Publish" to make it available in the store

## Technical Details

- Built with Manifest V3
- Uses minimal permissions (only activeTab and access to archive.is)
- Simple background script handles the redirection logic
- Strips query parameters and URL fragments before archiving

## Development Setup

Before using this extension in development, ensure you have icon images in the `images` folder:
- icon16.png (16x16 pixels)
- icon32.png (32x32 pixels)  
- icon48.png (48x48 pixels)
- icon128.png (128x128 pixels)