chrome.runtime.sendMessage({ message: "checkAuth" }, (response) => {
	if (response.status === "success") {
		window.location.replace("../main/index.html");
	}
});
