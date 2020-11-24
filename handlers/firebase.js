chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
   alert(request.command);
});
