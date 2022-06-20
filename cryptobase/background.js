// https://techblog.geekyants.com/building-a-chrome-extension-in-2021#heading-whats-a-chrome-extension
// https://www.freecodecamp.org/news/building-chrome-extension/

chrome.runtime.onInstalled.addListener(function () {
    console.log({chrome});
})