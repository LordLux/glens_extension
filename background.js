// Use browser.contextMenus instead of browser.menus
browser.contextMenus.create({
  id: "search-with-google-lens",
  title: "Search with Google Lens",
  contexts: ["image"], // This ensures the menu only appears when right-clicking an image
  icons: {
    "16": "icons/icon-16.png"
  }
});

// Use browser.contextMenus instead of browser.menus
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-with-google-lens") {
    // Construct the Google Lens URL
    const googleLensUrl = `https://lens.google.com/uploadbyurl?url=${encodeURIComponent(info.srcUrl)}`;
    
    // Create a new tab to open the Google Lens search results
    browser.tabs.create({ url: googleLensUrl });
  }
});