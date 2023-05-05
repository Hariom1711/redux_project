const CACHE_NAME = 'version-1';
const urlsToCache = [
  '/',
  'index.html',
  'cards.js',
  'cardDetails.js',
  'manifest.json',
  'favicon.ico',
  'logo192.png',
  'logo512.png',
  'static/css/main.5ecd60fb.chunk.css',
  'static/js/2.2c7590c7.chunk.js',
  'static/js/main.1ecf9a51.chunk.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
