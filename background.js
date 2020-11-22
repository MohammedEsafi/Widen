chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		id: 'named',
		title: "Click Me",
		documentUrlPatterns: ["https://www.google.com/"],
		contexts: ["all"],
	})
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
	console.log(JSON.stringify(info))
})