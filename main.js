function showStartupAlert() {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Startup Detected',
        message: 'The extensions is up and running.',
        priority:2
    });
}

chrome.runtime.onStartup.addListener(() => {
    showStartupAlert
});
