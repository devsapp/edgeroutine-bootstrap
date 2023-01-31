addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname === '/edge-dev-tools' || url.pathname === '/edge-dev-tools.js' || url.pathname === '/edge.js') {
    event.respondWith(fetch(event.request));
  }
});

addEventListener('install', function (event) {
  self.skipWaiting();
});
