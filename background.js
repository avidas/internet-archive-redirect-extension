chrome.action.onClicked.addListener((tab) => {
  // Skip invalid URLs
  if (!tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('about:')) {
    return;
  }

  // Form the archive.is URL
  const archiveUrl = `https://archive.is/newest/${tab.url}`;
  
  // Redirect to the archived version
  chrome.tabs.update(tab.id, { url: archiveUrl });
});