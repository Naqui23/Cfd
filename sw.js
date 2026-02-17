var CACHE = ‘cfd-v4’;
var FILES = [’./’,’./index.html’,’./manifest.json’,’./icon192.png’,’./icon512.png’];

self.addEventListener(‘install’, function(e) {
e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(FILES) }));
self.skipWaiting();
});

self.addEventListener(‘activate’, function(e) {
e.waitUntil(caches.keys().then(function(k) {
return Promise.all(k.filter(function(n) { return n !== CACHE }).map(function(n) { return caches.delete(n) }));
}));
self.clients.claim();
});

self.addEventListener(‘fetch’, function(e) {
var url = e.request.url;
// Never cache API/proxy calls
if (url.indexOf(‘yahoo.com’) >= 0 || url.indexOf(‘corsproxy.io’) >= 0 || url.indexOf(‘allorigins.win’) >= 0 || url.indexOf(‘codetabs.com’) >= 0 || url.indexOf(‘googleapis.com’) >= 0) {
e.respondWith(fetch(e.request));
return;
}
e.respondWith(caches.match(e.request).then(function(r) { return r || fetch(e.request) }));
});