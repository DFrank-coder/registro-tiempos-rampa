const CACHE_NAME = 'rampa-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './fecha.js',
  './exportar.js',
  './datos-vuelo.js',
  './borrar.js',
  './por-vuelo.js',
  './cargar-vuelo.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
