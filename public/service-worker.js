console.log("hello");

// Add event listeners for install, fetch, and activate

self.addEventListener("install", function (event) {
  console.log("installed");
  self.skipWaiting();
});

self.addEventListener("fetch", function (event) {
  if (event.request.url.includes("/api/transaction")) {
    console.log("fetching transaction data", event.request);
    // Will need to respond with local-first strategy
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});

self.addEventListener("activate", function (event) {
  console.log("activated");
});
