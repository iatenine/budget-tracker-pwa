console.log("hello");

// Add event listeners for install, fetch, and activate

self.addEventListener("install", function (event) {
  console.log("installed");
});

self.addEventListener("fetch", function (event) {
  console.log("fetching");
});

self.addEventListener("activate", function (event) {
  console.log("activated");
});
