document.getElementById("logout").addEventListener("click", () => {
   chrome.runtime.sendMessage({ message: "logout" }, (response) => {
      if (response.status === "success") {
         window.location.replace("../authentication/index.html");
      }
   });
});