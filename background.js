// When the extension button/icon is click it opens up the main page
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({url: 'mainPage.html'});
});
