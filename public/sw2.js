var CACHE_NAME = 'mysite';
var urlsToCache = [
    '/'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache Alexei');
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
                console.log(response);
                return response;
          }
          return fetch(event.request);
        }
      )
    );
});  