var CACHE = ‘cfd-v3’;
var FILES = [
‘./’,
‘./index.html’,
‘./manifest.json’,
‘./icon192.png’,
‘./icon512.png’
];

self.addEventListener(‘install’, function(e) {
e.waitUntil(
caches.open(CACHE).then(function(cache) {
return cache.addAll(FILES);
}).then(function() {
return self.skipWaiting();
})
);
});

self.addEventListener(‘activate’, function(e) {
e.waitUntil(
caches.keys().then(function(names) {
return Promise.all(
names.filter(function(n) { return n !== CACHE; }).map(function(n) { return caches.delete(n); })
);
}).then(function() {
return self.clients.claim();
})
);
});

self.addEventListener(‘fetch’, function(e) {
var url = e.request.url;

// Always go to network for API calls
if (url.indexOf(‘finnhub.io’) >= 0 || url.indexOf(‘googleapis.com’) >= 0) {
e.respondWith(fetch(e.request));
return;
}

// Cache-first for app files
e.respondWith(
caches.match(e.request).then(function(cached) {
return cached || fetch(e.request).then(function(resp) {
if (resp.ok) {
var clone = resp.clone();
caches.open(CACHE).then(function(cache) { cache.put(e.request, clone); });
}
return resp;
});
}).catch(function() {
return caches.match(’./index.html’);
})
);
});