// const cacheName = 'assets-v1';
self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open('offline-first-assets-v1').then((cache) => {
      return cache.addAll([
        'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js',
        'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.min.js',
        'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-aria.min.js',
        'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-messages.min.js',
        'http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.js',
        'http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.css',
        '/',
        'js/app.bundle.js',
        'css/style.css',
        'templates/banks-wrapper.html',
        'templates/banks-listing.html',
        // @TODO cache a default image for the banks logo while offline (no-logo.png) and all other images that can be retrieved from the web
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      };
      return fetch(event.request);
    })
  );
});
