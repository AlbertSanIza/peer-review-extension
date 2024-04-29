chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.includes('https://github.com/') && tab.url.includes('/pull/')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['assets/lib/jquery.js', 'assets/lib/jquery-toast.js', 'src/github.js']
        })
    }
})
