self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // No cacheamos nada por ahora para no complicar actualizaciones
  e.respondWith(fetch(e.request));
});
