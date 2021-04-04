// Initialize Firebase

const config = {
	// TODO: Replace with your project's config object
	apiKey: "",
	authDomain: "",
	projectId: ""
};

firebase.initializeApp(config);

// Listener

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {

	// Check authentication

	if (request.message === "checkAuth") {
		const user = firebase.auth().currentUser;

		if (user)
			sendResponse({ status: "success", response: user });
		else
			sendResponse({ status: "no-auth" });

		return true;
	}

	// Logout

	if (request.message === 'logout') {
		firebase.auth().signOut()
			.then(() => {
				sendResponse({ status: "success" });
			})
			.catch((error) => {
				sendResponse({ status: "error", message: error });
			});

		return true;
	}

	// Authentication with Email & password

	if (request.message === "login") {
		if (request.method === "sign_up") {
			firebase.auth().createUserWithEmailAndPassword(request.email, request.password)
				.then((result) => {
					const emailSent = false;

					result.user.sendEmailVerification()
						.then(() => {
							emailSent = true;
						});

					sendResponse({ status: "success", response: { ...result.user, emailSent } });
				})
				.catch((error) => {
					sendResponse({ status: "error", message: error });
				});

			return true;
		}

		if (request.method === "sign_in") {
			firebase.auth().signInWithEmailAndPassword(request.email, request.password)
				.then((result) => {
					sendResponse({ status: "success", response: result.user });
				})
				.catch((error) => {
					sendResponse({ status: "error", message: error });
				});

			return true;
		}

		// Google authentication

		if (request.method === "google") {
			const provider = new firebase.auth.GoogleAuthProvider();

			firebase.auth().signInWithPopup(provider)
				.then((result) => {
					sendResponse({ status: "success", response: result.user });
				})
				.catch((error) => {
					sendResponse({ status: "error", message: error });
				});

			return true;
		}

		// Facebook authentication

		if (request.method === "facebook") {
			const provider = new firebase.auth.FacebookAuthProvider();

			firebase.auth().signInWithPopup(provider)
				.then((result) => {
					sendResponse({ status: "success", response: result.user });
				})
				.catch((error) => {
					sendResponse({ status: "error", message: error });
				});

			return true;
		}
	}

	// Reset password

	if (request.message === "reset") {
		firebase.auth().sendPasswordResetEmail(request.email)
			.then(() => {
				sendResponse({ status: "success" });
			})
			.catch((error) => {
				sendResponse({ status: "error", message: error });
			});

		return true;
	}

	// Execute content Script

	if (request.message === "executeScript") {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			let currentTab = tabs[0];
			if (currentTab.url.includes("www.instagram.com")) {
				chrome.tabs.executeScript(currentTab.id, { file: "content/utils.js" });
				chrome.tabs.executeScript(currentTab.id, { file: "content/index.js" });
			}
		});
	}
});
