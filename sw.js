const CACHE_NAME = 'enfertest-v6';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
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
