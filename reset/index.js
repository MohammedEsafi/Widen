(() => {
	const form = document.getElementById('form');
	const emailField = document.getElementById('email');

	form.onsubmit = (event) => {
		event.preventDefault();

		const datum = { email: emailField.value };

		chrome.runtime.sendMessage({ message: "reset", ...datum }, (response) => {
			document.getElementById('form').style.display = "none";
			document.getElementById('description').innerText = "You’ve been emailed a password reset link."
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