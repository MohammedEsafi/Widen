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
			sendResponse({ status: "success", datum: user });
		else
			sendResponse({ status: "no-auth" });
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
	}

   if (request.message === "login") {
      if (request.method === "email") {
         firebase.auth().signInWithEmailAndPassword(request.email, request.password)
            .then((result) => {
               sendResponse({ status: "success", datum: result.user });
            })
            .catch((error) => {
               sendResponse({ status: "error", message: error });
            });
      }

      if (request.method === "google") {
         const provider = new firebase.auth.GoogleAuthProvider();

         firebase.auth().signInWithPopup(provider)
            .then((result) => {
               sendResponse({ status: "success", datum: result.user });
            })
            .catch((error) => {
               sendResponse({ status: "error", message: error });
            });
		}
		
		if (request.method === "facebook") {
         const provider = new firebase.auth.FacebookAuthProvider();

         firebase.auth().signInWithPopup(provider)
            .then((result) => {
               sendResponse({ status: "success", datum: result.user });
            })
            .catch((error) => {
               sendResponse({ status: "error", message: error });
            });
      }
   }
});
