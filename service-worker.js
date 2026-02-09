self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('teddy-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js'
      ]);
    })
  );
});
