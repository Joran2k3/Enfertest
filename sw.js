// sw.js — EnferTest v13
// Estrategia: Network-First para archivos propios (garantiza actualizaciones automáticas).
//             Cache-First para recursos externos lentos (fonts, mermaid).
// skipWaiting + clients.claim → el nuevo SW toma control de inmediato sin recargar.

const CACHE_NAME = 'enfertest-v13';

// Recursos externos que pueden servirse desde caché sin problema (no cambian con versiones)
const EXTERNAL_CACHE = [
  'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Archivos propios que precacheamos para modo offline, pero siempre intentamos red primero
const OWN_FILES = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './manifest.json'
];

// --- INSTALL: precachear todo lo que podamos ---
self.addEventListener('install', event => {
  // Forzar que este SW tome el control sin esperar a que el anterior muera
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cachear externos (silenciar errores individuales)
      const externalPromises = EXTERNAL_CACHE.map(url =>
        cache.add(url).catch(err => console.warn('[SW] No se pudo cachear externo:', url, err))
      );
      // Cachear propios (silenciar errores individuales)
      const ownPromises = OWN_FILES.map(url =>
        cache.add(url).catch(err => console.warn('[SW] No se pudo cachear propio:', url, err))
      );
      return Promise.all([...externalPromises, ...ownPromises]);
    })
  );
});

// --- ACTIVATE: eliminar cachés antiguas y tomar control inmediato ---
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Eliminando caché antigua:', name);
            return caches.delete(name);
          })
      )
    ).then(() => {
      // Tomar control de todos los clientes abiertos sin necesidad de recargar
      return self.clients.claim();
    })
  );
});

// --- FETCH: estrategia según tipo de recurso ---
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Solo interceptar peticiones GET
  if (event.request.method !== 'GET') return;

  // Recursos EXTERNOS → Cache-First (rápido, no cambian con versiones)
  if (url.startsWith('https://cdn.jsdelivr.net') || url.startsWith('https://fonts.')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => caches.match(event.request));
      })
    );
    return;
  }

  // Archivos PROPIOS → Network-First (garantiza actualizaciones automáticas)
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si la red responde bien, actualizar la caché y devolver la respuesta fresca
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            // Guardar sin el query string (?v=X) para que siempre se encuentre
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // Sin red → servir desde caché (modo offline)
        return caches.match(event.request);
      })
  );
});
