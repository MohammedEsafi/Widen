// Initialize Firebase
const config = {
   apiKey: "AIzaSyCxsjdNrQT2kwiZPoNkDVYJo2JgBcXudAA",
   authDomain: "widen-app.firebaseapp.com",
   databaseURL: "https://widen-app.firebaseio.com",
   projectId: "widen-app",
   storageBucket: "widen-app.appspot.com",
};

firebase.initializeApp(config);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
   if (request.message === "checkAuth") {
      const user = firebase.auth().currentUser;

		if (user)
			sendResponse({ status: "success", response: user });
		else
			sendResponse({ status: "no-auth" });

		return true;
	}
	
	if (request.message === 'logout')
	{
		firebase.auth().signOut()
			.then(() => {
				sendResponse({ status: "success" });
			})
			.catch((error) => {
				sendResponse({ status: "error", message: error });
			});

		return true;
	}

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
		
		if (request.method === "sign_in")
		{
			firebase.auth().signInWithEmailAndPassword(request.email, request.password)
				.then((result) => {
					sendResponse({ status: "success", response: result.user });
				})
				.catch((error) => {
					sendResponse({ status: "error", message: error });
				});

			return true;
		}

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
});
