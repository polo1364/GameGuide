// GameMaster Service Worker
const CACHE_VERSION = '22';
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
          if (cacheName.startsWith('gamemaster-v') && cacheName !== CACHE_NAME) {
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
  if (event.request.method !== 'GET' || url.origin !== location.origin ||
      url.href.includes('api.deepseek.com') ||
      url.href.includes('fonts.googleapis.com') ||
      url.href.includes('fonts.gstatic.com') ||
      url.href.includes('wikipedia.org')) {
    return;
  }
  
  // Use Network First for HTML and JSON files to ensure fresh content
  const isNavigation = event.request.mode === 'navigate';
  const isHtmlOrJson = isNavigation || url.pathname.endsWith('.html') ||
                       url.pathname.endsWith('.json') || 
                       url.pathname === '/' ||
                       url.pathname === '';
  
  if (isHtmlOrJson) {
    // Network First strategy
    event.respondWith(
      fetch(event.request)
        .then(async (networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            await caches.open(CACHE_NAME)
              .then((cache) => cache.put(event.request, responseClone))
              .catch(error => console.warn('[SW] Cache write failed:', error));
          }
          return networkResponse;
        })
        .catch(() => {
          // Fallback to cache when offline
          return caches.open(CACHE_NAME).then(async cache => {
            const cachedResponse = await cache.match(event.request);
            const fallback = isNavigation ? await cache.match('./index.html') : null;
            return cachedResponse || fallback || new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
          });
        })
    );
  } else {
    // Cache First for other static assets
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => cache.match(event.request))
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request)
            .then(async (networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                const responseClone = networkResponse.clone();
                await caches.open(CACHE_NAME)
                  .then((cache) => cache.put(event.request, responseClone))
                  .catch(error => console.warn('[SW] Cache write failed:', error));
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
