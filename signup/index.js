document.getElementById("google-auth").addEventListener("click", () => {
   chrome.runtime.sendMessage({ message: "login", method: "google" }, (response) => {
      if (response.status === "success") {
         window.location.replace("../main/index.html");
      }
   });
});

document.getElementById("facebook-auth").addEventListener("click", () => {
   chrome.runtime.sendMessage({ message: "login", method: "facebook" }, (response) => {
      if (response.status === "success") {
         window.location.replace("../main/index.html");
      }
   });
});

document.getElementById("apple-auth").addEventListener("click", () => {
   chrome.runtime.sendMessage({ message: "login", method: "apple" }, (response) => {
      if (response.status === "success") {
         window.location.replace("../main/index.html");
      }
   });
});

(() => {
	const form = document.getElementById('form');
	const emailField = document.getElementById('email');
	const passwordField = document.getElementById('password');
	const confirmPasswordField = document.getElementById("confirm_password");

	const validatePassword = () => {
		if (passwordField.value !== confirmPasswordField.value) {
			confirmPasswordField.setCustomValidity("Passwords Don't Match");
		} else if (passwordField.value.length < 6) {
			confirmPasswordField.setCustomValidity("Password too short");
		} else {
			confirmPasswordField.setCustomValidity("");
		}
	}

	passwordField.onchange = validatePassword;
	confirmPasswordField.onkeyup = validatePassword;

	form.onsubmit = (event) => {
		event.preventDefault();

		const datum = { email: emailField.value, password: passwordField.value };

		chrome.runtime.sendMessage({ message: "login", method: "sign_up", ...datum }, (response) => {			
			if (response.status === "success") {
				window.location.replace("../main/index.html");
			} else {
				emailField.setCustomValidity(response?.message?.message);
				document.getElementById('btn').click();
			}
		})
	}
})();

(() => {
	const toggle = document.getElementById('to_login');

	toggle.onclick = (event) => {
		event.preventDefault();

		window.location.replace("../login/index.html");
	};
})();
