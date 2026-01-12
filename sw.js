// GameMaster Service Worker
const CACHE_VERSION = '6';
const CACHE_NAME = `gamemaster-v${CACHE_VERSION}`;
const STATIC_ASSETS = [
  './',
  './index.html',
  './games.json',
  './manifest.json'
];

// 立即激活新版本
const SKIP_WAITING = true;

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log(`[SW] Installing version ${CACHE_VERSION}`);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        if (SKIP_WAITING) {
          console.log('[SW] Skip waiting, activating immediately');
          return self.skipWaiting();
        }
      })
  );
});

// Activate event - clean up old caches and take control
self.addEventListener('activate', (event) => {
  console.log(`[SW] Activating version ${CACHE_VERSION}`);
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Claiming all clients');
      return self.clients.claim();
    }).then(() => {
      // 通知所有客戶端有更新
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'SW_UPDATED',
            version: CACHE_VERSION
          });
        });
      });
    })
  );
});

// Fetch event - Network First strategy for HTML/JSON, Cache First for static assets
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip cross-origin requests and API calls
  if (url.origin !== location.origin || 
      url.href.includes('generativelanguage.googleapis.com') ||
      url.href.includes('fonts.googleapis.com') ||
      url.href.includes('fonts.gstatic.com') ||
      url.href.includes('wikipedia.org')) {
    return;
  }
  
  // Use Network First for HTML and JSON files to ensure fresh content
  const isHtmlOrJson = url.pathname.endsWith('.html') || 
                       url.pathname.endsWith('.json') || 
                       url.pathname === '/' ||
                       url.pathname === '';
  
  if (isHtmlOrJson) {
    // Network First strategy
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // Fallback to cache when offline
          return caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || caches.match('./index.html');
          });
        })
    );
  } else {
    // Cache First for other static assets
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(event.request, responseClone));
              }
              return networkResponse;
            });
        })
        .catch(() => {
          return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        })
    );
  }
});

// Handle messages from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
