// imports data from the js7w.js file
self.importScripts('./js7w.js');

//  list of all the files to be cached
const cacheName = 'js7wPWA-v1';
const appShellFiles = [
  '/7wResult/',
  '/7wResult/index.html',
  '/7wResult/app.js',
  '/7wResult/stylesheet.css',
  '/7wResult/favicon.ico',
  '/7wResult/images/7W-300x190.jpg'
];

// install the service worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
  });

  //  fetch content from the cache if it is available
  self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) { return r; }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
  });
  