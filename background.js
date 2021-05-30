document
	.querySelector(
		'#react-root > section > main > section > div > div:nth-child(3) > div > article:nth-child(1) > div.eo2As > section.EDfFK.ygqzn > div > div > a > span'
	)
	.addEventListener('onclick');

// chrome.contextMenus.create({
// 	title: 'Widen',
// 	contexts: ['selection'],
// 	onclick: function (e) {
// 		console.log(e);
// 	}
// });

// chrome.runtime.onInstalled.addListener(function () {
// 	chrome.contextMenus.create({
// 		'id': 'sampleContextMenu',
// 		'title': 'Sample Context Menu',
// 		'contexts': ['selection']
// 	});
// });

chrome.contextMenus.create({
	'id': 'contextMenu',
	'title': 'Widen it',
	'contexts': ['all']
});

// chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
// 	if (request.message === 'executeScript') {
// 		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
// 			let currentTab = tabs[0];
// 			// if (currentTab.url.includes('www.instagram.com')) {
// 				chrome.tabs.executeScript(currentTab.id, { file: 'content/utils.js' });
// 				chrome.tabs.executeScript(currentTab.id, { file: 'content/index.js' });
// 			// }
// 		});
// 	}
// });
