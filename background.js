chrome.action.onClicked.addListener((tab) => {
  // Skip invalid URLs
  if (!tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('about:')) {
    return;
  }

  // Strip query parameters and fragments from URL
  const url = new URL(tab.url);
  const cleanUrl = url.origin + url.pathname;
  
  // Form the archive.is URL
  const archiveUrl = `https://archive.is/newest/${cleanUrl}`;
  
  // Redirect to the archived version
  chrome.tabs.update(tab.id, { url: archiveUrl });
});