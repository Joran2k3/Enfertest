const CACHE_NAME = 'enfertest-v7';
const urlsToCache = [
  './',
  './index.html',
  './styles.css?v=7',
  './app.js?v=7',
  './data.js?v=7',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Usamos catch para que si algún archivo (como un icono faltante) falla,
        // no se bloquee toda la instalación del Service Worker.
        return cache.addAll(urlsToCache).catch(err => console.log('Error caching files', err));
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Borrando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
