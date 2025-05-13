//Alert notification for extension
function showStartupAlert() {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Startup Detected',
        message: 'The extension is up and running.',
        priority:2
    });
}

chrome.runtime.onStartup.addListener(() => {
    showStartupAlert();
});
//context menu
function getword(info, tab) {
    console.log(info.selectionText + "was clicked.");
    if (info.menuItemId === "define-word") {
        const selectedText = info.selectionText
        chrome.windows.create({
            url: chrome.runtime.getURL(`popup.html?word=${encodeURIComponent(selectedText)}`),
            type: "popup",
            width: 580,
            height: 600
        });
    };
};
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "define-word",
        title: "Define: '%s'",
        contexts: ["selection"],   
    });
});

chrome.contextMenus.onClicked.addListener(getword);
