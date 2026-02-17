var CACHE='cfd-pro-v3';
var FILES=['./','./index.html','./manifest.json','./icon192.png','./icon512.png'];

self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES)}));
  self.skipWaiting();
});

self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(names){
    return Promise.all(names.filter(function(n){return n!==CACHE}).map(function(n){return caches.delete(n)}));
  }));
  self.clients.claim();
});

self.addEventListener('fetch',function(e){
  // Don't cache API/proxy requests
  if(e.request.url.indexOf('yahoo.com')>=0||e.request.url.indexOf('corsproxy')>=0||e.request.url.indexOf('allorigins')>=0||e.request.url.indexOf('codetabs')>=0){
    e.respondWith(fetch(e.request).catch(function(){return new Response('Offline',{status:503})}));
    return;
  }
  e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}));
});
