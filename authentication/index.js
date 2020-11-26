chrome.runtime.sendMessage({ message: "checkAuth" }, (response) => {
   if (response.status === "success") {
      window.location.replace("../main/index.html");
   }
});

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

// const onsubmit = () => {
// 	const form = document.getElementById
// }

// document.getElementById("btn").addEventListener("click", (event) => {
//    // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//    //    let currentTab = tabs[0];
//    //    if (currentTab.url.includes("www.instagram.com")) {
//    //       chrome.tabs.executeScript(currentTab.id, { file: "content.js" });
//    //    }
//    // });
// });
