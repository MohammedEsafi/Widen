chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
	if (request.message === 'executeScript') {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			let currentTab = tabs[0];
			if (currentTab.url.includes('www.instagram.com')) {
				chrome.tabs.executeScript(currentTab.id, { file: 'content/utils.js' });
				chrome.tabs.executeScript(currentTab.id, { file: 'content/index.js' });
			}
		});
	}
});
